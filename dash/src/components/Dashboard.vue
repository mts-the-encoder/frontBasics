<template>
  <div class="main">
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
  width: 100%;
  height: 100%;
  background: #ebf1fc;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}
@media only screen and (min-width: 900px) and (max-width: 1200px) {
  .main {
    height: calc(100vh - 113px);
    background: #ebf1fc;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
  }
}
</style>
