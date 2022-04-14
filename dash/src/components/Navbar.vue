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
        <i class="brand-icon icon-left fa-solid fa-layer-group" />
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
import NavbarItem from "./NavbarItem.vue";
import categories from "../data/menu-categories";

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
  padding-bottom: 20px;

  .breadcrumb {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      margin-left: 30px;
    }

    .icon-right {
      margin-left: 0;
    }
  }

  .nav {
    position: absolute;
    left: 0;
    top: 63px;
    bottom: 0;
    width: 100%;
    max-width: 320px;
    padding: 0 20px;
    background: #1d3faa;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in;
    &.visible {
      transform: translateX(0);
    }
  }

  .brand {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    margin-top: 25px;
    align-items: center;
  }
  ::v-deep .icon-left {
    margin-right: 20px;
  }
  ::v-deep .icon-right {
    margin-left: 20px;
  }
  ::v-deep .icon-right,
  ::v-deep .icon-left {
    font-size: 24px;
    text-align: center;
    min-width: 40px;
  }

  .categories {
    font-size: 15px;

    .active {
      color: #000;
      background-color: #ebf1fc;
      border-radius: 12px;
      height: 70px;
      width: 300px;
      padding: 5px;
    }
  }
  @media only screen and (min-width: 1024px) {
    max-width: 180px;
    transition: max-width 0.5s;

    .breadcrumb {
      display: none;
    }

    .nav {
      position: static;
      transform: none;
    }

    .categories {
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
      .brand-text {
        max-width: 0;
        opacity: 0;
        transition: all 0.5s linear;
      }
      .brand-toggle {
        transform: rotate(180deg);
        transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      }
    }

    .categories {
      .category-item {
        ::v-deep .category-label {
          max-width: 0;
          opacity: 0;
          transition: all 0.5s linear;
        }
      }
      &.visible {
        font-size: 15px;
        background-color: red;
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

    &.expanded {
      max-width: 300px;

      .categories {
        .category-item {
          ::v-deep .category-label {
            max-width: 280px;
            opacity: 1;
          }
        }
        &.visible {
          font-size: 15px;
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
  }
}
</style>
