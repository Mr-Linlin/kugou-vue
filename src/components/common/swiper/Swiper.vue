<template>
  <div
    class="swiper"
    @touchstart="touchStart($event)"
    @touchmove="touchMoveStart($event)"
  >
    <div
      :style="{
        width: maxWidth,
        marginLeft: marginLeft,
      }"
      class="swiper-banner"
    >
      <div v-for="(item, index) in banners" :key="index" class="banner-item">
        <img :src="item.pic" alt="" />
      </div>
    </div>
    <ol class="swiper-ol">
      <li
        v-for="(item, index) in banners"
        :key="index"
        :class="{ active: currentIndex == index }"
        @click="btnClick(index)"
      ></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      currentIndex: 0, //获取用户当前图片的索引
      interval: 2000, //每隔多少时间轮播
      timer: null, //定义定时器
      statrPoint: 0, //获取用户点击的坐标
      startLeft: 0, //用户按下后已走的距离
      movePoint: 0, //用户移动的距离
    };
  },
  created() {
    this.swiperPlay();
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  methods: {
    //   点击切换轮播图
    btnClick(index) {
      this.currentIndex = index;
    },
    // 开启定时器自动轮播
    swiperPlay() {
      this.timer = setInterval(() => {
        if (this.currentIndex >= this.banners.length - 1) {
          return (this.currentIndex = 0);
        }
        this.currentIndex = this.currentIndex + 1;
      }, this.interval);
      this.timer = setInterval(() => {}, this.interval);
    },
    // 点击获取用户点击的坐标
    touchStart(e) {
      this.statrPoint = e.changedTouches[0].pageX;
    },
    // 用户移动坐标
    touchMoveStart(e) {
      this.movePoint = e.changedTouches[0].pageX - this.statrPoint;
    },
  },
  computed: {
    maxWidth() {
      return this.banners.length * 100 + "%";
    },
    marginLeft() {
      return -this.currentIndex * 100 + "%";
    },
    // 计算滑动的位置
    tarnsformLeft() {
      return this.movePoint + "px";
    },
  },
};
</script>

<style scoped>
.swiper {
  position: relative;
  margin: 10px;
  overflow: hidden;
}
.swiper-banner {
  display: flex;
  margin-left: 0px;
  /* transform: translateX(0); */
}
.swiper-banner img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.swiper-ol {
  position: absolute;
  display: flex;
  list-style: none;
  bottom: 3vw;
  left: 50%;
  transform: translate(-50%, -50%);
}
.swiper-ol li {
  width: 8px;
  height: 3px;
  background: rgba(63, 61, 61, 0.7);
  margin-right: 3px;
}
.swiper .active {
  background: #fff;
}
</style>