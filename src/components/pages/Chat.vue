<template>
  <div>
    <b-container fluid class="chat-page" no-gutters>
      <b-row align-v="center" align-h="center" class="vh-100" no-gutters>
        <b-col cols="6" class="chat-window" style="padding: 0">
          <b-container fluid no-gutters style="padding: 0">
            <b-row no-gutters class="logo-text-tray">
              <b-col sm="12">
                <h5 class="logo-text-chat">poly chat</h5>
              </b-col>
            </b-row>
          </b-container>
          <b-container>
            <b-row align-v="center" align-h="center">
              <b-col cols="12" class="chat-box-tray">
                <div>
                  <b-form-input
                    v-model="text"
                    id="input-message"
                    placeholder="Напишите сообщение..."
                  >
                  </b-form-input>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";
export default {
  components: {
    // Slide,
  },
  data() {
    return {
      messageContent: "",
      dialog: false,
      name: "",
      connection: null,
      users: [{name: "Test User"}],
      Messages: [{ message: "Hello" }],
    };
  },

  methods: {
    sendMessage() {
      this.connection.invoke("SendMessage",this.messageContent).catch(function (err) {
        return console.error(err);
      });
    },

    openDialog() {
      this.dialog = true;
    },

    joinRoom() {
      this.dialog = false;
      this.connection.invoke("JoinRoom",this.name).catch(function (err) {
        return console.error(err);
      });
    },

    listen() {
      window.console.log("Listen Started");

      if (this.connection.state !== HubConnectionState.Connected) {
        this.connect().finally(() => {
          this.listen();
          return;
        });
      }

      this.connection.on("NewConnection", (res) => {
        console.log(res);
      });

      this.connection.on("JoinRoom", (res) => {
        var userObj = {
          name: res
        };
        this.users.push(userObj);
      });

      this.connection.on("SendMessage",(res) => {
        var messageObj = {
          message: res
        };
        this.Messages.push(messageObj);
        console.log(res);
      })
    },

  },

  created() {
    if (this.connection === null) {
      this.connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5100/chathub")
        .build();
    }
    this.connection
      .start()
      .then(() => {
        window.console.log("Connection Success");
        this.listen();
      })
      .catch((err) => {
        window.console.log(`Connection Error ${err}`);
      });

    this.connection.onclose(() => {
      window.console.log("Connection Destroy");
    });
  },
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

.chat {
  height: 628px;
  width: 714px;
  margin-top: 4vh;
  background: #f3f3f3;
  color: #fff;
}

.chat-box-tray {
  height: 10vh;
  margin-top: 56vh;
  background: #fafafa;
  border-radius: 1vh;
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

#input-message {
  border: none !important;
  border-radius: 1vh;
  margin-left: 2vw;
  margin-top: 2vh;
  width: 70%;
  background-color: #f3f3f3 !important;
  outline: none !important;
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

.arrow {
  width: 2vw;
  margin-left: 28vw;
  margin-top: 0;
}
</style>