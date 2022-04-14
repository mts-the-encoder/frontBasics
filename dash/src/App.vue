<template>
  <div class="principal-div">
    <Navbar />
    <Dashboard />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Dashboard,
  },
};
</script>

<style lang="scss" scoped>
.principal-div {
    padding: 20px;
    @media only screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-evenly;
    }
}
</style>
