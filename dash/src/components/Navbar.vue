<template>
  <div>
    <div class="nav">
      <Items />
    </div>
    <nav class="nav">
      <div class="brand"></div>
      <ul class="categories">
        <NavbarItem
          v-for="category in categories"
          :key="category.id"
          :label="category.label"
          :icon="category.icon"
          :children="category.children"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import Items from "./Items";
import NavbarItem from "./NavbarItem";
import categories from "../data/menu-categories";

export default {
  name: "Navbar",
  components: {
    Items,
    NavbarItem,
  },
  data() {
    return {
      categories,
    };
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
