<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tar-bar />
  </div>
</template>
<script>
import MainTarBar from "@/components/context/mainbar/MainTarBar";
export default {
  name: "App",
  components: {
    MainTarBar,
  },
};
</script>
<style scoped>
@import url("./assets/css/base.css");
</style>
