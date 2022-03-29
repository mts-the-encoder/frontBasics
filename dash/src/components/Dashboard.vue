<template>
  <div  class="main">
    <Boxes />
  </div>
</template>

<script>
import Boxes from "./Boxes.vue";
export default {
  name: "Dashboard",
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
  height: 88vh;
  background: #ebf1fc;
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 30px;
  display: flex;
  justify-content: space-around;
}
</style>
