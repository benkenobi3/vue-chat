<template>
  <div>
    <b-container fluid class="chat-page vh-100">
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
                <input class="icon" type="submit" name="send" value=">" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #2ecc71;
  }

  .chat {
    height: 628px;
    width: 714px;
    margin-top: 4vh;
    background: #f3f3f3;
    color: #fff;
  }

  .chat-box-tray {
    height: 68px;
    width: 714px;
    border-radius: 0px;
    position: absolute;
    bottom: 68px;
    background: #fafafa;
  }

  .logo-text-chat {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    float: left;
    margin: 10px;
    color: #1c1c1c;
  }

  .logotext-tray {
    background: #fafafa;
    height: 30px;
    width: 714px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }

  .new-chat-reset {
    height: 50px;
    width: 300px;
    left: 500px;
    position: absolute;
    bottom: 175px;
    border-radius: 4px;
    background: #2ecc71;
    color: #f3f3f3;
    border: 2px solid #f3f3f3;
  }

  .exit-button {
    height: 50px;
    width: 90px;
    left: 820px;
    position: absolute;
    bottom: 175px;
    border-radius: 4px;
    background: #bbbbbb;
    color: #f3f3f3;
    border: 2px solid #f3f3f3;
  }

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
  }

  .chat-page {
    background: linear-gradient(#e0fff1, #ddefc6);
  }

  .chat {
    height: 628px;
    width: 714px;
    margin-top: 4vh;
    background: #f3f3f3;
    color: #fff;
  }

  .logo-text-chat {
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
  }

  .logotext-tray {
    background: #fafafa;
    height: 30px;
    width: 714px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }

  .chat-bubble {
    padding: 10px 14px;
    background: #eee;
    margin: 10px 30px;
    border-radius: 9px;
    position: relative;
    animation: fadeIn 1s ease-in;
  }
</style>