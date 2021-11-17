<template>
  <div
    class="recommended-view"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <div
      class="recommended-view-item"
      ref="view"
      :style="{
        width: maxWidth,
      }"
    >
      <div class="view-item" v-for="(item, index) in balls" :key="index">
        <recommends-view-item :ball="item" ref="recommend" />
      </div>
    </div>
  </div>
</template>

<script>
import RecommendsViewItem from "./RecommendsViewItem";
export default {
  nam: "RecommendedView",
  components: {
    RecommendsViewItem,
  },
  data() {
    return {
      movePoint: 0, //用户移动的距离
      statrPoint: 0, //获取用户点击的坐标
      startLeft: 0, //用户按下后已走的距离
      itemWidth: 0, //获取图标的宽度
      currentIndex: 0, //控制回弹效果
      imagWidth: 0, //获取图标的宽度
    };
  },
  props: {
    balls: {
      typeo: Array,
      default: [],
    },
  },
  mounted() {
    this.$refs.view.style.transform = "translateX(0px)";
  },
  computed: {
    maxWidth() {
      return this.balls.length * 20 + "%";
    },
    marginLeft() {
      return -this.currentIndex * 100 + "%";
    },
  },
  methods: {
    //   获取手指点击的坐标
    touchStart(e) {
      // 点击的时候获取图标的宽度
      this.imagWidth = this.$refs.recommend.$el.offsetWidth + 2.25;

      this.statrPoint = e.changedTouches[0].pageX;
      this.startLeft = parseFloat(
        this.$refs.view.style.transform
          .split("("[1])[0]
          .split("(")[1]
          .split("p")[0]
      );
    },
    // 获取手指移动的坐标
    touchMove(e) {
      this.movePoint = e.changedTouches[0].pageX - this.statrPoint;

      this.$refs.view.style.transform =
        "translateX(" + (this.movePoint + this.startLeft) + "px)";
    },
    // 手指抬起的时候走了多远
    touchEnd(e) {
      this.movePoint = e.changedTouches[0].pageX - this.statrPoint;
      this.itemWidth = this.imagWidth / this.balls.length;
      if (Math.abs(this.movePoint) > this.itemWidth) {
        if (this.movePoint > 0) {
          this.currentIndex = 0;
        }
        if (this.movePoint < 0) {
          this.currentIndex = this.balls.length / 2;
        }
        this.$refs.view.style.transtion = ".3s";
        this.$refs.view.style.transform =
          "translateX(" + -this.currentIndex * this.imagWidth + "px)";
      }
    },
  },
};
</script>

<style scoped>
.recommended-view {
  overflow: hidden;
  margin-left: 10px;
}
.recommended-view-item {
  display: flex;
  text-align: center;
}
</style>