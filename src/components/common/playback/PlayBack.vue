<template>
  <div class="play-back">
    <div class="back-info">
      <div class="circle" ref="circle" @click="lyricClick(songInfo.id)">
        <div class="left">
          <div class="left-circle" ref="leftCircle"></div>
        </div>
        <div class="right">
          <div class="right-circle" ref="rightCircle"></div>
        </div>
        <div class="inner">
          <img :src="songInfo.picUrl" alt="" />
        </div>
      </div>
      <div class="info-name">
        <span class="song-name">{{ songInfo.name }}</span>
        <span class="author">- {{ songInfo.author }}</span>
      </div>
    </div>
    <div class="back-play">
      <div class="play-icon" @click="playClick">
        <div class="pause-icon" v-if="songInfo.isPlay">
          <img src="~@/assets/img/home/pause.svg" alt="" />
        </div>
        <div class="play-icon" v-else>
          <img src="~@/assets/img/home/start_play.svg" alt="" />
        </div>
      </div>
      <div class="playlist-icon">
        <img src="~@/assets/img/home/playlistMusic.svg" alt="" />
      </div>
    </div>
    <audio ref="audio" :src="songInfo.url"></audio>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlayBack",
  data() {
    return {
      isActive: true, //切换播放和暂停
      timer: null, //定时器
      loader: 0, //当前加载进度条的大小
      currentTime: 0, //获取当前播放位置
      num: 0, //获取当前加载的百分比
      deg: 0, //获取旋转的角度
      musicUrl: null, //获取音乐
      durationTime: 0, //音乐时长
    };
  },
  created() {
    this.getMusicInfo(1430583016);
  },
  methods: {
    /**
     * 处理网络请求
     */
    getMusicInfo(id) {
      this.$store.dispatch("musicplay", id);
    },
    /**
     * 监听事件请求
     */
    // 点击切换播放暂停
    playClick() {
      this.songInfo.isPlay = !this.songInfo.isPlay;
      if (!this.songInfo.isPlay) {
        this.$refs.audio.play();
        // 获取音乐时长
        this.durationTime = this.$refs.audio.duration;
        this.timer = setInterval(this.playBar, 1);
      } else {
        this.$refs.audio.pause();
        clearInterval(this.timer);
      }
    },
    // 处理进度条
    playBar() {
      this.currentTime = this.$refs.audio.currentTime;
      this.$store.commit('setCurrentTime',this.currentTime)
      this.num = Number((this.currentTime / this.durationTime) * 100).toFixed(
        0
      );
      this.deg = Number((this.currentTime / this.durationTime) * 360).toFixed(
        0
      );
      if (this.num >= 100) {
        clearInterval(this.timer);
        this.songInfo.isPlay = !this.songInfo.isPlay;
        this.currentTime = 0;
      } else {
        if (this.deg > 180) {
          this.$refs.leftCircle.style.transform = `rotate(${this.deg}deg)`;
        } else {
          this.$refs.leftCircle.style.transform = `rotate(${-180}deg)`;
          this.$refs.rightCircle.style.transform =
            "rotate(" + -(180 - this.deg) + "deg)";
        }
      }
    },
    // 点击进入歌词界面
    lyricClick(id) {
      this.$router.push({
        path: "/lyric",
        query: { id },
      });
    },
  },
  computed: {
    ...mapGetters(["songInfo"]),
  },
};
</script>

<style scoped>
.play-back {
  display: flex;
  position: fixed;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  background: rgb(248, 248, 248);
  bottom: 49px;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.1);
}
.inner img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.back-info {
  display: flex;
}
.circle {
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  background: rgb(174, 224, 219);
  margin-left: 15px;
  border-radius: 50%;
}
.left,
.right {
  position: absolute;
  width: 20px;
  height: 40px;
  opacity: 0.5;
  overflow: hidden;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.left .left-circle,
.right .right-circle {
  width: 20px;
  height: 40px;
  background: rgb(64, 174, 252);
  /* opacity: 0.5; */
  transition: all 0.5s;
}
.left .left-circle {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  transform-origin: right center;
  transform: rotate(180deg);
}
.right .right-circle {
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  transform-origin: left center;
  transform: rotate(180deg);
}
.inner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  font-size: 12px;
}
.info-name {
  margin-left: 15px;
}
.song-name {
  font-weight: 600;
  font-size: 14px;
  color: #000;
}
.author {
  font-size: 12px;
  margin-left: 10px;
}
.back-play {
  display: flex;
  margin-right: 15px;
  margin-top: 5px;
}
.play-icon,
.pause-icon {
  margin-right: 5px;
}
</style>