<template>
  <div class="navbar" :class="{ expanded: isExpanded }">
    <nav class="nav">
      <div class="brand">
        <i class="brand-icon icon-left fa-solid fa-layer-group"/>
        <span class="brand-text">Example</span>
        <a
          href="#"
          aria-label="expand menu"
          class="brand-toggle icon-right fa-solid fa-arrow-left-long"
          @click="expandMenu($event)"
        />
      </div>
      <ul class="categories">
        <navbar-item
          v-for="category in categories"
          :key="category.id"
          :label="category.label"
          :icon="category.icon"
          :children="category.children"
          :isActive="category.isActive"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';
import categories from '../data/menu-categories';

export default {
  components: {
    NavbarItem,
  },
  data() {
    return {
      categories,
      isExpanded: false,
      isActive: true,
    };
  },
  methods: {
    expandMenu(e) {
      e.preventDefault();
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.navbar {
  width: 100%;
  max-width: 120px;
  transition: max-width 0.5s;
  font-family: "Nunito Sans", sans-serif;

  .nav {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

  }
  .brand-toggle {
    color: #FFF;
  }
  .categories {
    width: 100%;
    margin-top: 30px;

    .category-item {
      ::v-deep .category-label {
        max-width: 0;
        opacity: 0;
        transition: all 0.5s linear;
      }
    }
    .active {
      color: #000;
      background-color: #ebf1fc;
      border-radius: 12px;
      height: 70px;
      width: 400px;
      padding: 5px;
    }
  }

  .brand {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 25px;
    align-items: center;

    .brand-text {
      font-size: 25px;
      max-width: 0;
      opacity: 0;
      transition: all 0.5s linear;
      width: 100%;
    }
    .brand-toggle {
      transform: rotate(180deg);
      transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      text-decoration: none;
    }
  }
  &.expanded {
    max-width: 300px;

    .categories {
      .category-item {
        ::v-deep .category-label {
          max-width: 280px;
          opacity: 1;
        }
      }
    }

    .brand {
      .brand-text {
        max-width: 280px;
        opacity: 1;
      }
      .brand-toggle {
        transform: rotate(0deg);
      }
    }
  }
  ::v-deep .icon-left {
    margin-right: 20px;
  }
  ::v-deep .icon-right {
    margin-left: 20px;
  }
  ::v-deep .icon-right,
  ::v-deep .icon-left {
    font-size: 32px;
    text-align: center;
    min-width: 40px;
  }
}
</style>
