<template>
  <div class="principal-div">
    <Navbar />
    <Dashboard />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Dashboard,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  background-color: #1d3faa;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  overflow-x: hidden;
  overflow-y: hidden
}
  .principal-div {
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
  }
</style>
