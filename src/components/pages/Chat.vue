<template>
  <div>
    <b-container fluid class ="main-page vh-100">
      <div class="row no-gutters">
        <div class="chat mx-auto">
         
            <div class="logotext-tray">
              <h class="logo-text-chat">poly chat</h>
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
 .main-page {
    background:linear-gradient(#E0FFF1 50%, #ffffff 50%);
  }

.chat{
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





  .logo {
    width: 10vw;
  }

  .welcome-card {
    margin-top: 2vh;
    width: 22vw;
    filter: drop-shadow(0.5vw 0.5vh 0.5rem #EBEBEB);
  }
</style>