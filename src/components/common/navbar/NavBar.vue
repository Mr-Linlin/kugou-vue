<template>
  <div class="navbar">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 44px;
  line-height: 44px;
}
.nav-left,.nav-right{
    width: 50px;
    /* background: red; */
}
.nav-center{
    flex: 1;
}
</style>