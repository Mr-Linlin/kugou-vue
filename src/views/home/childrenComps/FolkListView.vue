<template>
  <div class="folk-list">
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
  name: "FolkListView",
  mixins: [MusicList],
  components: {
    MusicView,
    MusicViewTitle,
    MusicListBlock,
  },
};
</script>

<style scoped>
</style>