<template>
  <div class="container">
    <div class="box">

    </div>
    <div class="box">

    </div>
    <div class="box">

    </div>
    <div class="box">

    </div>
    <div class="banner">

    </div>
    <div class="banner">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Boxes',
}
</script>

<style lang="scss">
.container {
  background-color: #EBF1FC;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
}
.box {
  width: 20px;
  height: 200px;
  background-color: #FFF;
  flex-basis: calc(25% - 20px);
  margin-top: 120px;
  box-shadow: .3px .3px .2px .2px #000;
}
.banner {
  width: 600px;
  height: 500px;
  background-color: #FFF;
  box-shadow: .3px .3px .2px .2px #000;
}
</style>
