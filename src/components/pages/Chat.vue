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

            <!-- <b-row>
              <b-col>
                <b-button class="new-chat-reset">Найти нового собеседника</b-button>
              </b-col>
              <b-col>
                <b-button class="exit-button">Выйти</b-button>
              </b-col>
            </b-row> -->

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
                <b-img class="arrow" :src="require('../../assets/arrow.png') "> </b-img>
              </div>
              
            </b-col>
          </b-row>
        </b-container>
        
        </b-col>

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
  background: #FAFAFA;
  border-radius: 1vh;
}

.logo-text-chat {
  font-family: "Gilroy";
  font-weight: 600;
  font-style: normal;
  margin-left: 1vw;
  text-align: left;
  color: #1c1c1c;
}

.logo-text-tray {
  background: #fafafa;
  margin: 0px !important;
  border-radius: 0px;
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
  background-color: #F3F3F3 !important;
}

#input-message::placeholder {
  color:#BBBBBB !important; 
  font-style: italic !important;
}

.arrow {
  width: 2vw;
  margin-left: 28vw;
}


/*
.chat-bubble {
  padding: 10px 14px;
  background: #eee;
  margin: 10px 30px;
  border-radius: 9px;
  position: relative;
  animation: fadeIn 1s ease-in;
} */

</style>