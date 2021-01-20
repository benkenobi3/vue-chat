<template>
  <div>
    <b-container fluid class="chat-page" no-gutters>
      <b-row align-v="center" align-h="center" class="vh-100" no-gutters>
        <b-col cols="6" class="chat-window" style="padding: 0">
          <b-container fluid no-gutters style="padding: 0">
            <b-row no-gutters class="logo-text-tray">
              <b-col cols="12">
                <div no-gutters>
                  <h6 class="logo-text-chat">poly chat</h6>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button>Найти нового собеседника</b-button>
                <b-button>Выйти</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-col>

        <b-row class="chat-box-tray">
          <b-col> </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
  <!-- <b-container fluid class="chat-page vh-100">
      <div class="row no-gutters">
        <div class="chat mx-auto">
              
          <div class="logotext-tray">
            <h class="logo-text-chat">poly chat</h>
          </div>
          <form method="post" action="/////НАЧАТЬ НОВЫЙ ЧАТ!!!!">
            <button class="new-chat-reset" type="reset">
              Найти нового собеседника
            </button>
          </form>
          <button class="exit-button" href="/" variant="success">Выйти</button>

          <div class="chat-box-tray">
            <div class="input-wrapper">
              <form method="post" action="/ОТПРАВИТЬ СООБЩЕНИЕ!!//">
                <input type="text" placeholder="Напишите сообщение..." />
                <input class="icon" type="submit" name="send" value="Отправить" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </b-container> -->
</template>


<script>
export default {};

// <import message from '../custom/message.vue'> </message>
</script>

<style>
/* .icon {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #2ecc71;
} */
.chat-window {
  height: 70vh;
  margin-top: 15vh;
  margin-bottom: 15vh;
  padding: 0;

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
  width: 55vw;
  background: #fafafa;
}

.logo-text-chat {
  font-family: "Gilroy";
  font-weight: 600;
  font-style: normal;
  text-align: left;
  color: #1c1c1c;
}

.logo-text-tray {
  background: #fafafa;
  height: 3vh;
  margin: 0px !important;
  border-radius: 0px;
  width: 100%;
}
.new-chat-reset {
  /* тут творится какой-то пиздец */
  height: 5vh;
  width: 20vw;
  /* margin-top: 30vh;
  margin-right: 15vw; */
  border-radius: 4px;
  font-family: "Gilroy";
  font-weight: 200;
  background: #2ecc71 !important;
  color: #f3f3f3 !important;
  border: 1rem #2ecc71 !important;
}

.exit-button {
  height: 5vh;
  width: 15vw;
  margin-top: 0vh;
  margin-right: 0vw;
  font-family: "Gilroy";
  font-weight: 200;
  background: #bbbbbb;
  color: #f3f3f3;
  border: 2px solid #f3f3f3;
}
/*
.message-box {
  background: #f3f3f3;
  padding: 10px 30px;
}

input {
  border: none;
  padding: 10px 40px;
  border-radius: 40px;
  width: 70%;
}

.chat-bubble {
  padding: 10px 14px;
  background: #eee;
  margin: 10px 30px;
  border-radius: 9px;
  position: relative;
  animation: fadeIn 1s ease-in;
} */

.chat-page {
  background: linear-gradient(#e0fff1, #ddefc6);
}

/* .logo-text-chat {
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  float: left;
  margin: 10px;
  color: #1c1c1c;
} */

.logo-text-tray {
  background: #fafafa;
  height: 30px;
  width: 714px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
}
</style>