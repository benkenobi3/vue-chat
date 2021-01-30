import { HubConnectionBuilder} from "@microsoft/signalr"

export default {

  actions: {
    createConnection(ctx) {
      let connection = new HubConnectionBuilder()
      .withUrl("http://93.94.147.139:5100/chathub")
      .build();

      ctx.commit('updateConnection', connection)
    },

    joinRoom(ctx, userObj) {
      ctx.commit('updateUsers', userObj)
    },

    newMessage(ctx, messageObj) {
      ctx.commit('updateMessages', messageObj)
    },

    cleanUp(ctx) {
      ctx.commit('cleanUp')
    }
  },

  mutations: {
    updateConnection(state, connection) {
      state.connection = connection
    },
    updateUsers(state, userObj) {
      state.chat.users.push(userObj)
    },
    updateMessages(state, messageObj) {
      state.chat.messages.push(messageObj)
    },
    cleanUp(state) {
      state.connection = null
      state.chat = null
    }
  },

  state: {
    connection: null,
    chat: {
      users: [],
      messages: []
    }
  },

  getters: {
    getConnection(state) {
      return state.connection
    },
    getChat(state) {
      return state.chat
    },
    getChatUsers(state) {
      return state.chat.users
    },
    getChatMessages(state) {
      return state.chat.messages
    }
  },

}
