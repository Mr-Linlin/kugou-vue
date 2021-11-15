<template>
  <div id="app">
    <router-link to="/category">分类</router-link>
    <router-link to="/home">首页</router-link>
    <router-link to="/profile">我的</router-link>
    <router-link to="/focus">关注</router-link>
    <router-view/>
  </div>
</template>

<style scoped>
  @import url('./assets/css/base.css');
</style>
