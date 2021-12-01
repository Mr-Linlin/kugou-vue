<template>
  <div class="lyric">
    <lyric-nav-bar class="nav" @click="backClick" />
    <div class="item-icon">
      <img :src="songInfo.picUrl" alt="" />
    </div>
    <scroll class="wrapper" ref="wrapper">
      <div class="lyr" ref="lyr">
        <div
          class="lyric-item"
          v-for="(item, key, index) in lyc"
          :key="index"
          :class="{
            active:
              parseInt(songInfo.currentTime) >= key &&
              parseInt(songInfo.currentTime) < lycArr[index + 1],
          }"
        >
          <span>{{ item }}{{ scrollY(key, index) }}</span>
        </div>
      </div>
    </scroll>
    <lyric-bootom-bar class="bottom-bar" :songs="songInfo" ref="lyricBar" :comments="comments"/>
  </div>
</template>

<script>
import { getLyricInfo, getComments } from "@/network/lyric";
import { mapGetters } from "vuex";

import LyricNavBar from "./childrenComps/LyricNavBar";
import LyricBootomBar from "./childrenComps/LyricBootomBar";

import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Lyric",
  components: {
    LyricNavBar,
    LyricBootomBar,
    Scroll,
  },
  data() {
    return {
      id: 0,
      lyc: {},
      lycArr: [],
      currentTime: 0,
      comments: {},
    };
  },
  created() {
    // 获取用户id获取歌词
    this.getLyricInfo(this.songInfo.id);
    // 获取歌曲评论信息
    this.getComments(this.songInfo.id);
  },
  mounted() {},
  methods: {
    /**
     * 处理网络请求
     */
    // 获取歌曲评论
    getComments(id) {
      getComments(id).then((res) => {
        // console.log(res);
        this.comments.total = res.total;
      });
    },
    getLyricInfo(id) {
      getLyricInfo(id).then((res) => {
        // 将获取到的歌词切割遍历在进行切割
        let lyric = {};
        let str = res.lrc.lyric.split("[");
        str.forEach((item) => {
          let lyr = item.split("]");
          let n = lyr[0].split(".")[0].split(":");
          let time = n[0] * 60 + parseInt(n[1]);
          // 如果歌词不为空则添加到数组里面然后进行渲染
          if (lyr[1] !== "\n") {
            lyric[time] = lyr[1];
          }
        });
        this.lyc = lyric;
        // console.log(lyric);
        this.getLyricKeys(lyric);
      });
    },
    // 获取歌词的秒数
    getLyricKeys(lrcArr) {
      for (const key in lrcArr) {
        this.lycArr.push(key);
      }
      // console.log(this.lycArr);
    },
    // 当歌词滚动时间currenttime大于key的时候，动态向上滚动
    scrollY(key, index) {
      this.currentTime = parseInt(this.songInfo.currentTime);
      if (
        this.currentTime >= key &&
        this.currentTime < this.lycArr[index + 1]
      ) {
        this.$refs.lyr.style.top = `${-31 * index}px`;
      }
    },
    /**
     * 处理事件监听
     */
    // 点击返回上一个页面
    backClick() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(["songInfo"]),
  },
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
.wrapper {
  height: calc(100% - 44px - 150px - 155px - 6vw);
  overflow: hidden;
  margin: 3vw 0;
}
.lyr {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  align-items: center;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.item-icon {
  position: relative;
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  z-index: 999;
}
.item-icon img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.lyric-item {
  font-size: 14px;
  height: 16px;
  margin-top: 15px;
  width: 60%;
  overflow: hidden;
  line-height: 16px;
}
.active {
  color: rgb(221, 83, 71);
  font-size: 16px;
  font-weight: 600;
}
</style>