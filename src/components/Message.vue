<template>
  <div>
      <b-container fluid>
          <b-row>
              <h5 class="sender"> {{ message.username }}</h5>
              <b-col class="message-box">
                  {{ message.message }}
              </b-col>
              <b-col class="time-sent"></b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    props:["message"]
}
</script>

<style>

.message-box {
    width: 100%;
    height: 100%;
    font-family: "Gilroy";
    font-weight: 200;
    color: #1C1C1C;
    text-align: left;
    word-wrap: break-word;
}

 .sender {
    font-family: "Gilroy";
    font-weight: 600;
    color: #2ECC71;
    margin-left: 2vw;
}
/*
.time-sent {
    font-family: "Gilroy";
    font-weight: 400;
    margin-right: 90%;
    color: #BBBBBB;
} */

</style>