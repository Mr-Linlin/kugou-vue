<template>
  <div class="home">
    <home-nav-bar />
    <scroll ref="scroll" :pullUpLoad="true" :probeType="3" class="wrapper">
      <swiper :banners="banners" />
      <recommended-view :balls="balls"/>
    </scroll>
  </div>
</template>

<script>
import HomeNavBar from "./childrenComps/HomeNavBar";
import RecommendedView from "./childrenComps/recommend/RecommendedView";

import Swiper from "@/components/common/swiper/Swiper";
import Scroll from "@/components/common/scroll/Scroll";

import { getHomeData, getBall } from "@/network/home";
export default {
  name: "Home",
  components: {
    HomeNavBar,
    Swiper,
    Scroll,
    RecommendedView,
  },
  data() {
    return {
      banners: [],
      balls: [],
    };
  },
  created() {
    // 在页面加载前将数据获取完毕
    this.getHomeData();

    // 获取原型图标
    this.getHomeBall();
  },
  methods: {
    /**
     * 处理网络请求
     */
    // 获取首页数据
    getHomeData() {
      getHomeData().then((res) => {
        const data = res.data.blocks;
        this.banners = data[0].extInfo.banners;
      });
    },
    // 获取首页原型图标的入口
    getHomeBall() {
      getBall().then((res) => {
        this.balls = res.data;
      });
    },
    /**
     * 处理事件的监听
     */
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
.wrapper {
  position: relative;
  height: calc(100% - 103px);
}
</style>