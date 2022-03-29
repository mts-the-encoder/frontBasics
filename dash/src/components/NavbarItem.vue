<template>
  <li class="category-item">
    <i class="category-icon" :class="`fa-solid fa-${icon}`"></i>
    <span class="category-label">{{ label }}</span>
    <i v-if="hasSubcategory" class="category-icon-sub fa-solid fa-arrow-down"></i>
    <ul v-if="hasSubcategory" class="subcategories">
      <li class="category-item" v-for="child in children" :key="child.label">
        <span class="category-label">{{ child.label }}</span>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    label: { type: String, required: true },
    icon: { type: String, required: true },
    children: { type: Array, default: () => {} },
  },
  data() {
    return {
      hasSubcategory: this.children.length,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: inherit;
  width: 200px;
  height: 50px;
  padding: 10px;
  margin-left: 120px;
  padding-bottom: 2px;
  padding-top: 2px;
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  float: left;
  margin: 0 auto;
}
#dash {
  background-color: #ebf1fc;
  border-radius: 10px;
  position: relative;
  padding-bottom: 10px;
  width: 300px;
  height: 50px;
}
#item-bottom {
  border-bottom: 1px solid #ebf1fc;
  width: 200px;
  align-self: flex-start;
  padding-top: 10px;
}
.span-main {
  color: #000;
  background-color: #ebf1fc;
  margin-right: 150px;
}
#span-example {
  padding-bottom: 30px;
  margin-top: 20px;
}
#second-items {
  padding-top: 20px;
}
i {
  font-size: 25px;
  color: #fff;
}
#principal {
  color: #000;
  background-color: #ebf1fc;
}
.big-text {
  justify-self: center;
}
</style>
