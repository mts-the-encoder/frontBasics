<template>
  <div class="main">
    <!-- <div>
      <p>Application | <b>Dashboard</b></p>
      <p>General Report</p>
    </div> -->
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
};
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  height: 85vh;
  margin-left: 25%;
  background: #ebf1fc;
  border-radius: 20px;
  display: flex;
}
</style>
