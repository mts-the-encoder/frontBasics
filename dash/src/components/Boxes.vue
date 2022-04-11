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
  box-shadow: .5px .5px .5px .5px #000;
}
.banner {
  width: 600px;
  height: 505px;
  background-color: #FFF;
  box-shadow: .5px .5px .5px .5px #000;
}
@media only screen and (max-width: 450px) {
    .container {
      height: 100%;
      width: 70%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: flex-start;
      &active {
        width: 10vh;
      }
    }
      .box {
        height: 50px;
        width: 100px;
        background-color: #FFF;
      }
      .banner {
        display: none;
      }
}
</style>
