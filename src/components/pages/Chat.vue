<template>

  <div>
    <b-container fluid class ="chat-page vh-100">
      <div class="row no-gutters">
        <div class="chat mx-auto">
         
            <div class="logotext-tray">
              <h class="logo-text-chat">poly chat</h>
            </div>
            <form method="post" action="/////НАЧАТЬ НОВЫЙ ЧАТ!!!!">
            <button class="new-chat-reset" type="reset">Найти нового собеседника</button>
            </form>
           <button class="exit-button" href="/" variant="success">Выйти</button>
          

            <div class="chat-box-tray">
               
                 <div class="input-wrapper">
                   <form method="post" action="/ОТПРАВИТЬ СООБЩЕНИЕ!!//">
                   <input type="text" placeholder="Напишите сообщение...">
                   <input class="icon" type="submit" name="send" value="Отправить" >
                   </form>
                 </div>
               
            </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

body{
  text-rendering: optimizeLegibility;
}
 .main-page {
    background: linear-gradient(#E0FFF1, #DDEFC6);
  }
.icon{
  width:150px;
  height:50px;
  border-radius:25px;
  background:#2ECC71;
  color:#fff;
  
}
.chat{
height: 628px;
width: 714px;
margin-top: 4vh;
background:#F3F3F3;
color:#fff;

  }
.chat-box-tray{
 height: 68px;
width: 714px;
border-radius: 0px;
position:absolute;
bottom:68px;
 background:#FAFAFA;
}

.logo-text-chat{
  font-family:  'IBM Plex Sans', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
float:left;
margin:10px;
color: #1C1C1C;
}

.logotext-tray{
  background:#FAFAFA;
  height: 30px;
width: 714px;
left: 0px;
top: 0px;
border-radius: 0px;

}
.new-chat-reset{
  height: 50px;
width: 300px;
left: 500px;
position: absolute;;
bottom: 175px;
border-radius: 4px;
background:#2ECC71;
color:#F3F3F3;
border: 2px solid #F3F3F3;
}

.exit-button{
  height: 50px;
width: 90px;
left: 820px;
position: absolute;;
bottom: 175px;
border-radius: 4px;
background:#BBBBBB;
color:#F3F3F3;
border: 2px solid #F3F3F3;

}
.message-box{
 background:#F3F3F3;
 padding:10px 30px;
}

input{
  border:none;
  padding: 10px 40px;
  border-radius: 40px;
  width:70%;
}


.chat-bubble{
padding: 10px 14px;
background: #eee;
margin: 10px 30px;
border-radius:9px;
position:relative;
animation: fadeIn 1s ease-in;

}


 .chat-page {
    background:linear-gradient(#E0FFF1, #DDEFC6);
  }

  .chat {
    height: 628px;
    width: 714px;
    margin-top: 4vh;
    background:#F3F3F3;
    color:#fff;
    }


  .logo-text-chat{
    font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    float:left;
    margin:10px;
    color: #1C1C1C;
  }

  .logotext-tray{
    background:#FAFAFA;
    height: 30px;
    width: 714px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }


  .chat-bubble{
    padding: 10px 14px;
    background: #eee;
    margin: 10px 30px;
    border-radius:9px;
    position:relative;
    animation: fadeIn 1s ease-in;
  }

</style>