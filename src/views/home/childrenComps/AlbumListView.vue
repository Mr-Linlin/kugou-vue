<template>
  <div class="music-list">
    <music-view>
      <music-view-title :subTitle="subTitle" />
      <music-list-block :resources="creatives" />
    </music-view>
  </div>
</template>

<script>
import MusicView from "@/components/context/musicview/MusicView";
import MusicViewTitle from "@/components/context/musicview/MusicViewTitle";
import MusicListBlock from "@/components/context/musicview/MusicListBlock";

import { MusicList } from "@/common/mixin";

export default {
  name: "AlbumListView",
  components: {
    MusicView,
    MusicViewTitle,
    MusicListBlock,
  },
  mixins: [MusicList],
};
</script>

<style scoped>
</style>