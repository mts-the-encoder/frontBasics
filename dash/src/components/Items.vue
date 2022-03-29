<template>
   <div class="item" id="span-example">
    <i class="fa-solid fa-layer-group"></i>
    <span v-show="showDash">Example</span>
    <i
      id="teste"
      class="fa-solid fa-arrow-left"
      @click="showDash = !showDash"
    ></i>
  </div>
  <div class="item" id="dash">
    <i id="principal" class="fa-solid fa-house-chimney"></i>
    <span v-show="showDash" class="span-main">Dashboard</span>
  </div>
  <div class="item">
    <i class="fa-solid fa-box-open"></i>
    <span v-show="showDash" class="big-text">Menu Layout</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-inbox"></i>
    <span v-show="showDash">Inbox</span>
  </div>
  <div class="item">
    <i class="fa-solid fa-file-arrow-down"></i>
    <span v-show="showDash">File Manager</span>
  </div>
  <div class="item">
    <i class="fa-solid fa-up-right-from-square"></i>
    <span v-show="showDash">Point of Save</span>
  </div>
  <div class="item">
    <i class="fa-brands fa-rocketchat"></i>
    <span v-show="showDash">Chat</span>
  </div>
  <div class="item" id="item-bottom">
    <i class="fa-solid fa-file-lines"></i>
    <span v-show="showDash">Post</span>
  </div>
  <div class="item" id="second-items">
    <span v-show="showDash">Crud</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-user"></i>
    <span v-show="showDash">Users</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-id-badge"></i>
    <span v-show="showDash">Profile</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div>
  <div class="item">
    <i class="fa-solid fa-paste"></i>
    <span v-show="showDash">Pages</span>
    <i class="fa-solid fa-arrow-down"></i>
  </div> -->
</template>

<script>
export default {
  name: "Items",
  data() {
    return {
      showDash: true,
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
