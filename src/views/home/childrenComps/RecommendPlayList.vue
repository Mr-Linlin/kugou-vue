<template>
  <div class="recommend-playlist">
    <music-view :creatives="creatives">
      <music-view-title :subTitle="subTitle" />
    </music-view>
  </div>
</template>

<script>
import MusicView from "@/components/context/musicview/MusicView";
import MusicViewTitle from "@/components/context/musicview/MusicViewTitle";
import MusicViewItem from "@/components/context/musicview/MusicViewItem";
import { MusicList } from "@/common/mixin";

export default {
  name: "RecommendPlayList",
  components: {
    MusicView,
    MusicViewTitle,
    MusicViewItem,
  },
  mixins: [MusicList],
};
</script>

<style scoped>
.recommend-playlist {
  border-top: solid 1px rgba(219, 219, 227, 0.5);
  box-shadow: 0 1px 10px rgba(100, 100, 100, 0.1);
}
</style>