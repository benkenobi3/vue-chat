<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .vh-100 {
    height: 100vh;
  }


  @font-face {
    font-family: "Gilroy";
    src: local('gilroy-regular'),
      url(./assets/fonts/gilroy-regular.ttf) format("truetype");
    font-weight: 200;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("gilroy-medium"),
      url(./assets/fonts/gilroy-medium.ttf) format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("gilroy-semibold"),
      url(./assets/fonts/gilroy-semibold.ttf) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("gilroy-bold"),
      url(./assets/fonts/gilroy-bold.ttf) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("gilroy-extrabold"),
      url(./assets/fonts/gilroy-extrabold.ttf) format("truetype");
    font-weight: 700;
  }

</style>
