<template>
  <div class="item" id="span-example">
    <i class="fa-solid fa-layer-group"></i>
    <span v-if="showDash">Example</span>
    <button @click="showDash = ! showDash">
      <i id="teste" class="fa-solid fa-arrow-left"></i>
    </button>
  </div>
  <div class="item" id="dash">
    <i id="principal" class="fa-solid fa-house-chimney"></i>
    <span class="span-main">Dashboard</span>
  </div>
  <div class="item">
    <i class="fa-solid fa-box-open"></i>
    <span>Menu Layout</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-inbox"></i>
    <span>Inbox</span>
  </div>
  <div class="item">
    <i class="fa-solid fa-file-arrow-down"></i>
    <span>File Manager</span>
  </div>
  <div class="item">
    <i class="fa-solid fa-up-right-from-square"></i>
    <span>Point of Save</span>
  </div>
  <div class="item">
    <i class="fa-brands fa-rocketchat"></i>
    <span>Chat</span>
  </div>
  <div class="item" id="item-bottom">
    <i class="fa-solid fa-file-lines"></i>
    <span>Post</span>
  </div>
  <div class="item" id="second-items">
    <i class="fa-solid fa-pen-to-square"></i>
    <span>Crud</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-user"></i>
    <span>Users</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-id-badge"></i>
    <span>Profile</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-paste"></i>
    <span>Pages</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>

</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
  .item {
    position: inherit;
    width: 200px;
    height: 50px;
    padding: 10px;
    margin-left: 50px;
    padding-bottom: 2px;
    padding-top: 2px;
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
  }
  #dash {
    background-color: #EBF1FC;
    border-radius: 10px;
    position: relative;
    padding-bottom: 10px;
    width: 300px;
    height: 50px;
  }
  #item-bottom {
    border-bottom: 1px solid #EBF1FC;
    width: 200px;
    align-self: flex-start;
    padding-top: 10px;
  }
  .span-main {
    color: #000;
    background-color: #EBF1FC;
  }
  #span-example {
    padding-bottom: 30px;
    margin-top: 20px;
  }
  #second-items{
    padding-top: 20px;
  }
  i {
    font-size: 25px;
    color: #FFF;
  }
  #principal  {
    color: #000;
    background-color: #EBF1FC;
  }
</style>
