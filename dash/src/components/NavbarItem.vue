<template>
  <li class="category-item" :class="{ active : isActive}">
    <i class="category-icon icon-left" :class="`fa-solid fa-${icon}`"></i>
    <span v-show="showItem" class="category-label">{{ label }}</span>
    <i v-if="hasSubcategory" class="category-icon-sub icon-right fa-solid fa-arrow-down"></i>
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
    isActive: { type: Boolean, required: true },
  },
  data() {
    return {
      hasSubcategory: this.children.length,
      showItem: true,
    };
  },
};
</script>

<style lang="scss" scoped>
  .subcategories {
    display: none;
  }
  .category-item {
    display: flex;
    justify-content: flex-start;
    margin-top: 38px;
    align-items: center;
    &.active {
      background-color: #ebf1fc;
    }

    .category-label {
      font-size: 20px;
      width: 100%;
    }
  }
</style>
