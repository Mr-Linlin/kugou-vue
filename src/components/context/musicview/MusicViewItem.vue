<template>
  <div class="music-view-item">
    <div class="item-icon">
      <img :src="uiElement.imgUrl" alt="" />
      <span class="play">{{ playCount }}</span>
    </div>
    <div class="item-text">{{ uiElement.title }}</div>
  </div>
</template>

<script>
export default {
  name: "MusicViewItem",
  props: {
    uiElement: {
      type: Object,
      default: {},
    },
  },
  computed: {
    // 计算播放量
    playCount() {
      let results = 0;
      results = this.uiElement.playCount / 10000;
      // console.log(results);
      if (results < 1) {
        return results * 10000;
      }else if(results>10000){
        return Number(results/10000).toFixed(1) +'亿'
      }
      return Number(results).toFixed(1) + "万";
    },
  },
};
</script>

<style scopde>
.item-icon {
  position: relative;
}
.play {
  display: inline-block;
  background: rgba(113, 113, 113, 0.7);
  padding: 2px 10px;
  border-radius: 15px;
  color: #fff;
  position: absolute;
  top: 5px;
  right: 4px;
  font-size: 12px;
}
.play::before {
  display: inline-block;
  position: relative;
  top: 1px;
  right: 2px;
  content: "";
  width: 16px;
  height: 14px;
  background: url("~@/assets/img/home/play.svg");
}
.item-icon img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.item-text {
  padding-bottom: 20px;
}
</style>