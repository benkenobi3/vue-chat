<template>
  <div>
      <b-container fluid>
          <b-row>
              <h4 class="sender"></h4>
              <b-col class="message-box">

              </b-col>
              <b-col class="time-sent"></b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.message-box {
    position: absolute;
    width: 3vw;
    height: 2vh;
    opacity: 00%;
    font-family: "Gilroy";
    font-weight: 200;
    color: black;
}

.sender {
    font-family: "Gilroy";
    font-weight: 600;
    color: #BBBBBB;
}

.time-sent {
    font-family: "Gilroy";
    font-weight: 400;
    margin-right: 90%;
    color: #BBBBBB;
}

</style>