<template>
  <div>
    <b-container fluid class="chat-page" no-gutters>
      <b-row align-v="center" align-h="center" class="vh-100" no-gutters>
        <b-col cols="6" class="chat-window" style="padding: 0">
          <b-container fluid no-gutters style="padding: 0">
            <b-row no-gutters class="logo-text-tray">
              <b-col cols="12">
                <h5 class="logo-text-chat">poly chat</h5>
              </b-col>
            </b-row>
            <b-row no-gutters id="chat" ref="chat">
              <b-col cols="12">
                <Message v-for="messageObj in getChatMessages" :key="messageObj.timestamp" :message="messageObj"></Message>
              </b-col>
            </b-row>
            <b-row no-gutters align-v="center" align-h="center">
              <b-col cols="12" class="chat-box-tray">
                <img src="../assets/paper-clip.svg" alt="" width="24vw" height="24vh">
                  <b-form-input
                    v-model="messageContent"
                    id="input-message"
                    placeholder="Напишите сообщение..."
                    class="inline">
                  </b-form-input>
                  <b-button  id="new-message" v-on:click="sendMessage">
                    <img src="../assets/arrow.svg" alt="" width="24vw" height="24vh">   
                  </b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { HubConnectionState } from "@microsoft/signalr";
import { mapGetters, mapActions } from "vuex"
import Message from '../components/Message.vue';
export default {
  props: ['username'],

  components: {
    Message
  },

  data() {
    return {
      messageContent: "",
    };
  },

  computed: mapGetters(["getConnection", "getChatUsers", "getChatMessages"]),

  methods: {
    ...mapActions(["joinRoom", "newMessage", "cleanUp"]),

    sendMessage() {
      var messageObj = {
          timestamp: new Date().valueOf(),
          username: this.username,
          message: this.messageContent
        };
      this.getConnection.invoke("SendMessage", JSON.stringify(messageObj)).catch(function (err) {
        return console.error(err);
      });
      this.messageContent = "";
    },

    listen() {
      window.console.log("Listen Started");

      if (this.getConnection.state !== HubConnectionState.Connected) {
        this.getConnection.connect().finally(() => {
          this.listen();
          return;
        });
      }

      this.getConnection.on("NewConnection", (res) => {
        console.log(res);
      });

      this.getConnection.on("JoinRoom", (res) => {
        var userObj = {
          name: res
        };
        this.joinRoom(userObj)
      });

      this.getConnection.on("SendMessage", (res) => {
        this.$refs.chat.scrollTop=this.$refs.chat.scrollHeight
        this.newMessage(JSON.parse(res))
      })
    },

  },

  created() {
    this.name = this.username
    this.listen()
  },

  beforeDestroy() {
    this.cleanUp()
  }
};
</script>

<style>
.chat-page {
  background: linear-gradient(#e0fff1, #ddefc6);
}

.chat-window {
  height: 70vh;
  margin-top: 15vh;
  margin-bottom: 15vh;
  padding: 0;
  border-radius: 1vh;
  background: #f3f3f3;
  color: #fff;
  box-shadow: 0vw 0vw 1vh #bbbbbb;
}

#chat {
  overflow-y: scroll;
  height: 58vh;
  scroll-behavior: smooth;
} 

.chat-box-tray {
  height: 100%;
  background: #fafafa;
  border-radius: 1vh;
  align-content: center !important;
}

.logo-text-chat {
  font-family: "Gilroy";
  font-weight: 600;
  font-style: normal;
  margin-left: 1vw;
  margin-top: 1vh;
  text-align: left;
  color: #1c1c1c;
}

.logo-text-tray {
  background: #fafafa;
  margin: 0px !important;
  min-width: 100%;
  max-width: 100%;
  border-radius: 1vh;
}

#new-message {
  margin-left: 25px;
  padding: 0;
  display: inline;
  background: none;
  border: none !important;
  outline: none !important;
}

#input-message {
  border: none !important;
  border-radius: 1vh;
  margin-left: 2vw;
  margin-top: 2vh;
  width: 70%;
  background-color: #f3f3f3 !important;
  outline: 0 !important;
  border-width: 0 0 2px;
  border-color: #bbbbbb;
  box-shadow: none;
  border-radius: 1vh;
}

#input-message::placeholder {
  color: #bbbbbb !important;
  font-style: italic !important;
  font-family: "Gilroy";
  font-weight: 200;
}

</style>
