<template>
  <div>
    <b-container fluid class ="main-page vh-100">
      <b-row align-v="center" align-h="center" class="vh-100">
        <b-col sm="4">
          
          <b-img class="logo" center fluid :src="require('../custom/Group_34.png')"></b-img>

          <b-card class="welcome-card mx-auto" title="poly chat">

              <b-card-text>
                <b-col>
                  <b-form-input 
                  v-model="name" 
                  size="sm"
                  placeholder="Введите имя или оставьте поле пустым.">
                  </b-form-input>
                </b-col>               
              </b-card-text>
              <b-card-text>
                Пользователей онлайн:
                <h6 class="amount-of-active-users">112</h6> 
              </b-card-text>

              <b-button href="/chat" variant="success">Начать чат!</b-button>

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
    background: linear-gradient(#E0FFF1 50%, #ffffff 50%);
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