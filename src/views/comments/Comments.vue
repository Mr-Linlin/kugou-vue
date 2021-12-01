<template>
  <div class="comments-view">
    <comments-nav-bar class="nav" :total="total" />
    <scroll ref="wrapper" class="wrapper" :pullUpLoad="true" :probeType="3" @loadMore="loadMore">
      <comments-title-bar />
      <tab-control :title="['推荐', '最热', '最新']" @tabClick="tabClick" />
      <comments-view :comments="comments[currentType].list" @loadImg="loadImg"/>
    </scroll>
    <comments-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import CommentsNavBar from "./childrenComps/CommentsNavBar";
import CommentsBottomBar from "./childrenComps/CommentsBottomBar";
import CommentsTitleBar from "./childrenComps/CommentsTitleBar";
import CommentsView from "./childrenComps/CommentsView";

import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/context/tabcontrol/TabControl";

import { getCommentsMusic } from "@/network/comments";
export default {
  name: "Comments",
  components: {
    CommentsNavBar,
    CommentsBottomBar,
    CommentsTitleBar,
    Scroll,
    TabControl,
    CommentsView,
  },
  data() {
    return {
      comments: {
        1: { pageNo: 0, list: [] },
        2: { pageNo: 0, list: [] },
        3: { pageNo: 0, list: [] },
      }, //获取评论的tab数据
      total: 0,
      currentType: 1, //初始值为默认排序
    };
  },
  created() {
    this.getCommentsMusic(0, this.$route.query.id, 1);
    this.getCommentsMusic(0, this.$route.query.id, 2);
    this.getCommentsMusic(0, this.$route.query.id, 3);
  },
  methods: {
    /**
     * 处理网络请求
     */
    getCommentsMusic(type, id, sortType) {
      const pageNo = this.comments[sortType].pageNo + 1;
      getCommentsMusic(type, id, sortType, pageNo).then((res) => {
        this.total = res.data.totalCount;
        this.comments[sortType].pageNo += 1;
        this.comments[sortType].list.push(...res.data.comments);
        console.log('有调用吗'+pageNo)
        this.$refs.wrapper.finishPullUp();
      });
    },
    /**
     * 处理点击事件
     */
    //获取点击切换tan栏的索引
    tabClick(index) {
      if (index === 0) {
        return (this.currentType = 1);
      } else if (index === 1) {
        return (this.currentType = 2);
      } else if (index == 2) {
        return (this.currentType = 3);
      }
    },
    // 监听页面高度
    loadImg(){
        this.$refs.wrapper.refresh()
    },
    // 获取更多数据
    loadMore(){
      this.getCommentsMusic(0, this.$route.query.id, this.currentType)
      console.log(this.currentType);
    }
  },
};
</script>

<style scoped>
.comments-view {
  position: relative;
  height: 100vh;
  background: #fff;
  z-index: 99;
}
.wrapper {
  position: relative;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>