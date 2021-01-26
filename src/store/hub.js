import { HubConnectionBuilder} from "@microsoft/signalr"

export default {

  actions: {
    // async fetchLibrary(ctx) {
    //     const res = await fetch(
    //         "https://musicsear4.herokuapp.com/api/v1/search/album/all/?limit=50"
    //     )
    //     const albums = await res.json()

    //     ctx.commit('updateLibrary', albums.results)
    // },
    createConnection(ctx) {
      let connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5100/chathub")
      .build();

      ctx.commit('updateConnection', connection)
    },
    cleanUp(ctx) {
      ctx.commit('cleanUp')
    }
  },

  mutations: {
    updateConnection(state, connection) {
      state.connection = connection
    },
    cleanUp(state) {
      state.connection = null
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
