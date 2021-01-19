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

  @font-face {
    font-family: "Gilroy";
    src: local("gilroy-medium"),
      url(/fonts/gilroy-medium.ttf) format("truetype");
    font-style: normal;
    font-weight: 200;
  }
  @font-face {
    font-family: "Gilroy";
    src: local('gilroy-regular'),
      url(/fonts/gilroy-regular.ttf) format("truetype");
      font-weight: 100;
  }
  @font-face {
    font-family: "Gilroy";
    src: local("gilroy-semibold"),
      url(/fonts/gilroy-semibold.ttf) format("truetype");
    font-weight: 600;
  }

  .vh-100 {
    height: 100vh;
  }

</style>
