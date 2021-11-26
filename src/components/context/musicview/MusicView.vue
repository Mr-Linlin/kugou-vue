<template>
  <div class="music-view">
    <slot></slot>
    <div
      class="music-content"
      @touchstart="touchStart($event)"
      @touchmove="touchMove($event)"
      @touchend="touchEnd($event)"
    >
      <div class="view-item" :style="{ width: maxWidth }" ref="viewItem">
        <div class="item" v-for="(item, index) in creatives" :key="index">
          <music-view-item :uiElement="(getPlayListInfo(item))" ref="el" />
        </div>
      </div>
    </div>
    <scroll-x class="scroll">
      <slot name="content"></slot>
    </scroll-x>
  </div>
</template>

<script>
import MusicViewItem from "@/components/context/musicview/MusicViewItem";
import ScrollX from "@/components/common/scroll/ScrollX";

import { CalendarInfo } from "@/network/home";

export default {
  name: "MusicView",
  components: {
    MusicViewItem,
    ScrollX,
  },
  data() {
    return {
      startPoint: 0, //获取用户点击的位置
      movePoint: 0, //获取用户移动的距离
      startLeft: 0, //获取用户按下时已走的距离
      itemWidth: 0, //判断拖动的距离是否超过这个宽度
      currentIndex: 0, //控制回弹的索引
      marginLeft: 0, //会弹后最大距离
      imgWidth: 0, //获取图片的宽度
    };
  },
  props: {
    creatives: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    this.$refs.viewItem.style.transform = "translateX(0px)";
  },
  computed: {
    maxWidth() {
      return this.creatives.length * ((this.creatives.length / 2) * 10) + "%";
    },
  },
  methods: {
    // 封装歌单详情
    getPlayListInfo(item) {
      const obj = new CalendarInfo(
        item.resources[0].resourceExtInfo,
        item.resources[0].uiElement
      );
      return obj;
    },

    //   点击时获取当前坐标
    touchStart(e) {
      // console.log(e);
      this.startPoint = e.changedTouches[0].pageX;

      this.startLeft = parseFloat(
        this.$refs.viewItem.style.transform.split("(")[1]
      );
    },
    // 获取手指移动的距离
    touchMove(e) {
      this.movePoint = e.changedTouches[0].pageX - this.startPoint;
      this.$refs.viewItem.style.transform =
        "translateX(" + (this.movePoint + this.startLeft) + "px)";
    },
    // 手指按下时判断是否距离是否需要回弹
    touchEnd(e) {
      this.movePoint = e.changedTouches[0].pageX - this.startPoint;
      this.itemWidth = this.$refs.el.$el.offsetWidth / this.creatives.length;
      this.imgWidth = this.$refs.el.$el.offsetWidth + 7.5;
      if (Math.abs(this.movePoint) > this.itemWidth) {
        if (this.movePoint > 0) {
          this.currentIndex = 0;
        }
        if (this.movePoint < 0) {
          this.currentIndex = Math.ceil(this.creatives.length / 2);
        }
        this.marginLeft = this.currentIndex * this.imgWidth;

        this.$refs.viewItem.style.transtion = ".3s";
        this.$refs.viewItem.style.transform =
          "translateX(" + -this.marginLeft + "px)";
      }
    },
  },
};
</script>

<style scoped>
.music-content {
  overflow: hidden;
  margin-top: 10px;
}
.music-view {
  margin-top: 10px;
}
.view-item {
  display: flex;
  font-size: 12px;
}
.item {
  flex: 1;
  margin-left: 15px;
}
</style>