<template>
  <div>
    <b-container fluid class ="main-page vh-100">
      <b-row align-v="center" align-h="center" class="vh-100">
        <b-col md="4">
          
          <b-img class="logo" center fluid :src="require('../custom/Group_34.png')"></b-img>

          <b-card class="welcome-card mx-auto" title="poly chat">

              <b-card-text>
                <b-col>
                  <b-form-input 
                  v-model="name" 
                  size="sm"
                  placeholder="Введите имя">
                  </b-form-input>
                </b-col>               
              </b-card-text>
              <b-card-text>
                Пользователей онлайн:
                <h6 class="amount-of-active-users">112</h6> 
              </b-card-text>

              <b-button href="/chat" variant="outline-success">Начать чат!</b-button>

          </b-card>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
  .main-page {
    background: linear-gradient(#E0FFF1, #DDEFC6);
    font-family: Gilroy;
    font-weight: 600;
  }

  .amount-of-active-users {
    color: #2ECC71;
    font-family: "Gilroy";
    font-weight: 200;
  }

  .logo {
    width: 10vw;
  }

  .welcome-card {
    margin-top: 2vh;
    width: 22vw;
    filter: drop-shadow(0.5vw 0.5vh 0.5rem #EBEBEB);
    font-family: "Gilroy";
    font-weight: 100;
  }

</style>