<template>
  <div>
      <b-container>
          <b-row>
              <b-col>
                  <b-button class="new-chat-reset">Найти нового собеседника</b-button>
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

.new-chat-reset {
  /* тут творится какой-то пиздец */
  height: 5vh;
  width: 20vw;
  margin-top: 40vh;
  /*margin-right: 15vw; */
  border-radius: 4px;
  font-family: "Gilroy";
  font-weight: 200;
  background: #2ecc71 !important;
  color: #f3f3f3 !important;
  border: 1rem #2ecc71 !important;
}
</style>