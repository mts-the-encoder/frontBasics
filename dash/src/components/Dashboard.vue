<template>
  <div  class="main">
    <Boxes />
  </div>
</template>

<script>

import Boxes from './Boxes.vue';

export default {
  components: {
    Boxes,
  },
  data() {
    return {
      showDash: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  height: 90vh;
  background: #ebf1fc;
  border-radius: 20px;
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    .main {
      width: 70%;
      height: 90vh;
      background: #ebf1fc;
      border-radius: 20px;
      margin-top: 40px;
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
    }
}
@media only screen and (max-width: 450px) {
    .main {
      height: 90vh;
      width: 80%;
      &active {
        background-color: red;
      }
    }
}
</style>
