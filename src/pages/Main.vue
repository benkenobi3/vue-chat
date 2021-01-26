<template>
  <div>
    <b-container fluid class ="main-page vh-100">
      <b-row align-v="center" align-h="center" class="vh-100">
        <b-col md="4">
          
          <b-img class="logo" center fluid :src="require('../../assets/Group_34.png')"></b-img>

          <b-card class="welcome-card mx-auto" title="poly chat">

            <b-card-text>
                <b-form-input 
                v-model="username" 
                id="input-name"
                placeholder="Введите имя">
                </b-form-input>
            </b-card-text>

            <b-button size="lg" block class="btn-polychat" href="/chat">Начать чат!</b-button>

            <b-card-text class="mt-2">
              Пользователей онлайн: <h6 class="amount-of-active-users">112</h6> 
            </b-card-text>

          </b-card>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        username: ''
      }
    },

    methods: {
      to_chat: function() {
        return ''
      },
    },
}
</script>

<style>

  .main-page {
    background: linear-gradient(#E0FFF1, #DDEFC6);
  }

  .amount-of-active-users {
    color: #2ECC71;
    font-family: "Gilroy";
    font-weight: 200;
    display: inline;
  }

  #input-name{
    margin-top: 4vh;
    outline: none !important;
    border-width: 0 0 2px;
    border-color: #BBBBBB;
    box-shadow: none;
    border-radius: 0;
    background-color: rgb(250, 250, 250);
  }

  #input-name::placeholder {
    color:#BBBBBB !important; 
    font-style: italic !important;
  }

  .logo {
    width: 8vw;
  }

  .welcome-card {
    margin-top: 2vh;
    padding: 1vh;
    width: 22vw;
    height: 35vh;
    filter: drop-shadow(0.5vw 0.5vh 0.5rem rgba(0,0,0, 0.08));
    font-family: "Gilroy";
    font-weight: 200;
    background-color: rgb(250, 250, 250) !important;
  }

  .welcome-card h4 {
    margin-top: 1vh;
    margin-bottom: 3vh;
    font-family: "Gilroy";
    font-weight: 600;
    line-height: 30px;
    font-size: 2rem;
  }

  .btn-polychat {
    margin-top: 4vh;
    background-color: #2ECC71 !important;
    border-color: #2ECC71 !important;
  }

</style>
