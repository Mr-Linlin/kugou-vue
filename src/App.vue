<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive :exclude="['Lyric','LyricBootomBar']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <play-back/>
    <main-tar-bar />
  </div>
</template>
<script>
import MainTarBar from "@/components/context/mainbar/MainTarBar";
import PlayBack from '@/components/common/playback/PlayBack'
export default {
  name: "App",
  components: {
    MainTarBar,
    PlayBack,
  },
};
</script>
<style scoped>
@import url("./assets/css/base.css");
</style>
