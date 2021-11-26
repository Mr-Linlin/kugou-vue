<template>
  <div class="home">
    <home-nav-bar />
    <scroll ref="scroll" :pullUpLoad="true" :probeType="3" class="wrapper">
      <swiper :banners="banners"/>
      <recommended-view :balls="balls" />
      <recommend-play-list :subTitle="subTitle" :creatives="creatives" />
      <!-- <folk-list-view :subTitle="folkTitle" :creatives="folks"/> -->
      <featured-video-list :subTitle="radirTitle" :creatives="radirPlayList" />
      <album-list-view :subTitle="albumsTitle" :creatives="albums" />
      <exclusive-play-list :subTitle="exclusTitle" :creatives="exclusives" />
      <music-calendar :subTitle="calendarTitle" :creatives="musicCalendar" />
      <block-video-view :subTitle="blockTitle" :creatives="blockVideo" />
    </scroll>
  </div>
</template>

<script>
import HomeNavBar from "./childrenComps/HomeNavBar";
import RecommendedView from "./childrenComps/recommend/RecommendedView";
import RecommendPlayList from "./childrenComps/RecommendPlayList";
import FeaturedVideoList from "./childrenComps/FeaturedVideoList";
import ExclusivePlayList from "./childrenComps/ExclusivePlayList";
import BlockVideoView from "./childrenComps/BlockVideoView";
import MusicCalendar from "./childrenComps/MusicCalendar";
import AlbumListView from "./childrenComps/AlbumListView";
import FolkListView from "./childrenComps/FolkListView";

import Swiper from "@/components/common/swiper/Swiper";
import Scroll from "@/components/common/scroll/Scroll";

import { getHomeData, getBall, TitleInfo } from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    Swiper,
    Scroll,
    RecommendedView,
    RecommendPlayList,
    FeaturedVideoList,
    ExclusivePlayList,
    BlockVideoView,
    MusicCalendar,
    AlbumListView,
    FolkListView,
  },
  data() {
    return {
      banners: [],
      balls: [],
      subTitle: {},
      creatives: [],
      radirPlayList: [],
      radirTitle: {},
      exclusives: [],
      exclusTitle: {},
      blockVideo: [],
      blockTitle: {},
      musicCalendar: [],
      calendarTitle: {},
      albums: [],
      albumsTitle: {},
      folks: [],
      folkTitle: {},
      scrollY: 0, //获取距离顶部的距离
    };
  },
  created() {
    // 在页面加载前将数据获取完毕
    this.getHomeData();

    // 获取原型图标
    this.getHomeBall();
  },
  activated() {
    // console.log("创建"+this.scrollY);
    this.$refs.scroll.scrollTop(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
    // console.log("销毁"+this.scrollY);
  },
  methods: {
    /**
     * 处理网络请求
     */
    // 获取首页数据
    getHomeData() {
      getHomeData().then((res) => {
        const data = res.data.blocks;
        console.log(data);
        this.banners = data[0].extInfo.banners;
        // 获取推荐歌单列表
        this.creatives = data[1].creatives;
        // 获取雷达歌单
        this.radirPlayList = data[6].creatives;
        // 获取装束场景歌单
        this.exclusives = data[7].creatives;
        // 获取视频合集歌单
        this.blockVideo = data[10].creatives;
        // 获取音乐日历列表
        this.musicCalendar = data[4].creatives;
        // 获取专辑列表
        this.albums = data[3].creatives;
        // 获取民谣列表
        this.folks = data[2].creatives;

        // 获取推荐歌单标题内容
        this.subTitle = new TitleInfo(data[1].uiElement);
        // 获取雷达歌单标题内容
        this.radirTitle = new TitleInfo(data[6].uiElement);
        // 获取专属场景歌单标题内容
        this.exclusTitle = new TitleInfo(data[7].uiElement);
        // 获取视频合集歌单标题内容
        this.blockTitle = new TitleInfo(data[10].uiElement);
        // 获取音乐日历标题
        this.calendarTitle = new TitleInfo(data[4].uiElement);
        // 获取专辑标题
        this.albumsTitle = { title: "新歌 | 新碟 | 专辑", text: "更多" };
        // 获取民谣标题
        this.folkTitle = new TitleInfo(data[2].uiElement);
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
  /* background: rgb(248, 248, 248); */
}
.wrapper {
  position: relative;
  height: calc(100% - 103px - 44px);
}
</style>