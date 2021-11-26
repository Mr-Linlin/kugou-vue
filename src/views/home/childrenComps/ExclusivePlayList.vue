<template>
  <div class="exclu-view">
    <music-view :creatives="creatives">
      <music-view-title :subTitle="subTitle" />
    </music-view>
  </div>
</template>

<script>
import MusicView from "@/components/context/musicview/MusicView.vue";
import MusicViewTitle from "@/components/context/musicview/MusicViewTitle";
import {MusicList} from '@/common/mixin'

export default {
  name: "ExclusivePlayList",
  components: {
    MusicView,
    MusicViewTitle,
  },
  mixins:[MusicList],
};
</script>

<style scoped>
.exclu-view {
  margin-top: 20px;
  box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.1);
}
</style>