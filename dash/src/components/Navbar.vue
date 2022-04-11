<template>
  <div class="navbar" :class="{ expanded: isExpanded }">
    <div class="breadcrumb">
      <a
        href="#"
        aria-label="show menu"
        class="brand-toggle icon-right fa-solid fa-bars"
        @click="showMenu"
      />
      <span>Application | <b>Dashboard</b></span>
    </div>
    <nav class="nav" :class="{ visible: isVisible }">
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
      isVisible: false,
    };
  },
  methods: {
    expandMenu(e) {
      e.preventDefault();
      this.isExpanded = !this.isExpanded;
    },
    showMenu() {
      this.isVisible = !this.isVisible;
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

  .breadcrumb {
    max-width: none;
  }
  @media only screen and (max-width: 450px) {
        font-size: 15px;
        max-width: none;
        justify-content: space-evenly;
      }

  .nav {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    &visible {
      translate: rotate(-100deg);
    }

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
      width: 450px;
      padding: 5px;
    }
  }

  .brand {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    margin-top: 25px;
    align-items: center;

    .brand-text {
      font-size: 25px;
      max-width: 0;
      opacity: 0;
      transition: all 0.5s linear;
      width: 100%;
      @media only screen and (max-width: 450px) {
        font-size: 15px;
      }
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
