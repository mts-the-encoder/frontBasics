<template>
  <div class="nav">
    <Items />
  </div>
</template>

<script>
import Items from "./Items";
export default {
  name: "Navbar",
  components: {
    Items,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 30%;
}
</style>
