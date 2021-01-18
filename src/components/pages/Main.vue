<template>
  <div class ="main">
    <b-container class="welcome-card"> 
      <b-row class="justify-content-center">
        
        <b-col sm="4">
          
          <b-img class="logo" center fluid :src="require('../custom/Group_34.png')"></b-img>

          <b-card class="card" title="poly chat">

              <b-card-text>
                <b-col>
                  <b-form-input 
                  v-model="name" 
                  size="sm"
                  placeholder="Введите имя или оставьте поле пустым."
                  >
                </b-form-input>
                </b-col>
                
                
              </b-card-text>
              <b-card-text>
                Пользователей онлайн: 
                <h6 class="amount-of-active-users">112</h6> 
              </b-card-text>

              <b-button href="#" variant="success">Начать чат!</b-button>

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

  .card {
    background-color: #FAFAFA;
  }

  .logo {
    width: 10vw;
    /* padding-bottom: 5vh; */
  }

  .welcome-card {
    align-items: center;
    padding-top: 28vh;
    filter: drop-shadow(0.5vw 0.5vh 0.5rem #EBEBEB);
  }

  .main {
    background: linear-gradient(#E0FFF1 50%, #ffffff 50%);
    height: 100vh;
  }

</style>