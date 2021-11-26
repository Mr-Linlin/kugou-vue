<template>
  <div class="lyric">
    <lyric-nav-bar class="nav" @click="backClick" />
    <scroll class="wrapper" ref="wrapper">
      <div class="lyric-item" v-for="(item, index) in lyc" :key="index">
        {{ item }}
      </div>
    </scroll>
    <lyric-bootom-bar class="bottom-bar" :songs="songInfo"/>
  </div>
</template>

<script>
import { getLyricInfo } from "@/network/lyric";
import { mapGetters } from "vuex";

import LyricNavBar from "./childrenComps/LyricNavBar";
import LyricBootomBar from "./childrenComps/LyricBootomBar"

import Scroll from "@/components/common/scroll/Scroll"

export default {
  name: "Lyric",
  components: {
    LyricNavBar,
    LyricBootomBar,
    Scroll
  },
  data() {
    return {
      id: 0,
      lyc: [],
    };
  },
  created() {
    // 获取用户id获取歌词
    this.getLyricInfo(this.songInfo.id);

  },
  methods: {
    /**
     * 处理网络请求
     */
    getLyricInfo(id) {
      getLyricInfo(id).then((res) => {
        // 将获取到的歌词切割遍历在进行切割
        let str = res.lrc.lyric.split("[");
        str.forEach((item) => {
          let lyr = item.split("]");
          // 如果歌词不为空则添加到数组里面然后进行渲染
          if (lyr[1]) {
            this.lyc.push(lyr[1]);
          }
        });
      });
    },
    /**
     * 处理事件监听
     */
    // 点击返回上一个页面
    backClick(){
      this.$router.go(-1)
    }
  },
  computed:{
    ...mapGetters(['songInfo'])
  }
};
</script>

<style scoped>
.lyric {
  position: relative;
  z-index: 999;
  background: linear-gradient(
    to bottom,
    rgba(37, 39, 49, 0.8),
    rgb(136, 98, 96)
  );
  height: 100vh;
  color: #fff;
}
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(100% - 44px - 136px);
  overflow: hidden;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.lyric-item{
  font-size: 14px;
  margin-top: 15px;
  width: 200px;
  overflow: hidden;
}
</style>