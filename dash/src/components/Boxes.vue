<template>
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="banner"></div>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {
  name: 'Boxes',
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style lang="scss">
.container {
  background-color: #ebf1fc;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
}
.box {
  width: 20px;
  height: 200px;
  background-color: #fff;
  flex-basis: calc(25% - 20px);
  margin-top: 120px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #000;
  padding-bottom: 10px;
}
.banner {
  width: 600px;
  height: 500px;
  padding-top: 10px;
  background-color: #fff;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #000;
}
@media only screen and (max-width: 450px) {
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
    &.active {
      width: 10vh;
    }
    &.visible {
      background-color: red;
    }
  }
  .box {
    height: 50px;
    width: 100px;
    background-color: #fff;
  }
  .banner {
    display: none;
  }
}
</style>
