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
  name: 'Boxes'
}
</script>

<style lang="scss">
.container {
  max-height: 70%;
  max-width: 90%;
  background-color: #EBF1FC;
  display: flex;
  justify-content: space-around;
}
.box {
  width: 200px;
  height: 150px;
  background-color: #FFF;
}
.banner {
  width: 500px;
  height: 400px;
  background-color: #FFF;
}
</style>
