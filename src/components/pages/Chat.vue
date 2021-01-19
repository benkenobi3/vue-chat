<template>
   <div>
    <b-container fluid class ="main-page ">
      <b-container class="upperleft-box">
      <div class= "row no-gutters">
        <h2 class="logo-text-chat">poly chat</h2>

      </div>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 .main-page {
    background: linear-gradient(#E0FFF1 50%, #ffffff 50%);
  }
.logo-text-chat{
  font-family: Gilroy;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;

}

 .upperleft-box{
margin: 60px auto;
background: #fff;
padding:0;
border-radius:7px;
}
.col-md-1{
  background: #eee;
}

.profile-image{
  width:50px;
  height:50px;
  border-radius:25px;
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