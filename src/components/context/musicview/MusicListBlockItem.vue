<template>
  <div class="music-list-item">
    <div class="list-item" v-for="(item, index) in resources" :key="index" @click="btnPlay(item.resourceId)">
      <div class="item-icon">
        <img :src="item.uiElement.image.imageUrl" alt="" />
        <span class="play-active" />
      </div>
      <div class="item-content">
        <div class="item-song-name">
          <span class="song-name">{{ item.uiElement.mainTitle.title }}</span>
          <span class="author">
            - {{ item.resourceExtInfo.artists[0].name }}</span
          >
        </div>
        <div class="item-title">{{ item.uiElement.subTitle.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicListBlockItem",
  props: {
    resources: {
      type: Array,
      default: [],
    },
  },
  methods:{
    // 根据电机id播放歌曲
    btnPlay(id){
      this.$store.commit('musicActive',this.$store.state.song.isPlay)
      this.$store.dispatch('musicplay',id)
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  height: 15vw;
}
.item-icon {
  position: relative;
  width: 15%;
  padding: 1vw 0;
}
.item-icon img {
  width: 100%;
  height: 100%;
}
.item-content {
  margin-left: 10px;
  flex: 1;
  border-bottom: 1px solid #ccc;
  padding-top: 3vw;
}
.item-title {
  font-size: 2vw;
  color: #ccc;
  margin-top: 1vw;
}
.item-song-name {
  overflow: hidden;
}
.song-name {
  font-size: 3vw;
  color: #000;
  font-weight: 600;
}
.author {
  font-size: 1vw;
  color: #ccc;
}
.play-active {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: url("~@/assets//img//home/play_active.svg");
}
</style>