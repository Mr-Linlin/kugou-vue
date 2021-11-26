<template>
  <div class="bottom-bar" ref="bar">
    <!-- 进度条 -->
    <div class="progress-bar">
      <div class="bell"><img src="~@/assets/img/lyric/bell.svg" alt="" /></div>
      <div class="progress">
        <span class="curren-time">{{ getCurrentTime }}</span>
        <div class="strip" ref="strip">
          <div class="strip-active" ref="stripActive"></div>
          <div class="strip-circle" ref="circle"></div>
        </div>
      </div>
      <span class="duration-time">{{ getDuration }}</span>
    </div>
    <!-- 播放栏 -->
    <div class="play-bar">
      <div class="play-left">
        <img src="~@/assets/img/lyric/order_play.svg" alt="" />
      </div>
      <div class="play-center">
        <div class="speed">
          <img src="~@/assets/img/lyric/speed.svg" alt="" />
        </div>
        <div class="circle-bar" @click="playClick">
          <img src="~@/assets/img/lyric/play.svg" alt="" v-if="songs.isPlay" />
          <img src="~@/assets/img/lyric/pause.svg" alt="" v-else />
        </div>
        <div class="next">
          <img src="~@/assets/img/lyric/next_song.svg" alt="" />
        </div>
      </div>
      <div class="play-right">
        <img src="~@/assets/img/lyric/playlist.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LyricBootomBar",
  data() {
    return {
      durationTime: 0, //歌曲时长
      currentTime: 0, //当前歌曲播放位置
      timer: null, //定时器
      stripWidth: 0, //获取进度条的宽度
      audioPLay: null, //获取播放组件的audio
      num: 0, //用于计算播放的秒数
    };
  },
  created() {
    // 组件挂载就启动定时器
    this.playClick();
  },
  mounted() {
    this.$nextTick(() => {
      this.stripWidth = this.$refs.strip.offsetWidth;
      // console.log(this.stripWidth);
      this.audioPLay = this.$parent.$root.$el.children[1].children[2];
    });
  },
  props: {
    songs: {
      type: Object,
      default: {},
    },
  },
  methods: {
    // 点击播放暂停
    playClick() {
      this.songs.isPlay = !this.songs.isPlay;
      if (this.songs.isPlay) {
        if (this.audioPLay !== null) {
          this.audioPLay.play();
          this.timer = setInterval(this.playBar, 1);
        }
      } else {
        if (this.audioPLay !== null) {
          this.audioPLay.pause();
          clearInterval(this.timer);
        }
      }
    },
    // 处理进度条
    playBar() {
      if (this.audioPLay !== null) {
        this.currentTime = this.audioPLay.currentTime;
        this.$store.commit("setCurrentTime", this.currentTime);
        this.num = this.currentTime / this.durationTime;
        if (this.num > 1) {
          clearInterval(this.timer);
          this.songs.isPlay = !this.songs.isPlay;
          this.currentTime = 0;
        } else {
          this.$refs.stripActive.style.width = `${~~(
            this.num * this.stripWidth
          )}px`;
          this.$refs.circle.style.left = `${~~(this.num * this.stripWidth)}px`;
        }
      }
    },
  },
  computed: {
    // 计算歌曲时长
    getDuration() {
      this.durationTime = this.songs.dt / 1000;
      let midden = parseInt(this.durationTime / 60);
      let time = parseInt(this.durationTime % 60);
      midden = midden < 10 ? "0" + midden : midden;
      time = time < 10 ? "0" + time : time;
      return `${midden}:${time}`;
    },
    // 计算当前播放秒数
    getCurrentTime() {
      if (this.audioPLay !== null) {
        this.currentTime = this.audioPLay.currentTime;
        let midden = parseInt(this.currentTime / 60);
        let time = parseInt(this.currentTime % 60);
        if (this.currentTime === undefined) {
          return "00:00";
        }
        midden = midden < 10 ? "0" + midden : midden;
        time = time < 10 ? "0" + time : time;
        return `${midden}:${time}`;
      }
    },
  },
  deactivated(){
    console.log(11);
  },
  beforeUnmount() {
    console.log('离开了嘛');
    clearInterval(this.timer)
  },
};
</script>

<style scoped>
.play-bar {
  display: flex;
  justify-content: space-between;
  height: 60px;
}
.play-center {
  display: flex;
  flex: 1;
  justify-content: center;
}
.play-center img {
  width: 24px;
  height: 24px;
}
.circle-bar {
  position: relative;
  width: 50px;
  height: 50px;
  background: rgba(40, 22, 22, 0.3);
  border-radius: 50%;
  margin: 5px 10%;
}
.circle-bar img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  transform: translate(-50%, -50%);
  margin: 0;
}
.speed,
.next {
  position: relative;
  top: 20px;
}
.play-left,
.play-right {
  position: relative;
  top: 13px;
}
.play-left {
  left: 15px;
}
.play-right {
  right: 15px;
}
.progress-bar {
  display: flex;
  margin: 30px 15px;
  height: 16px;
  line-height: 16px;
}
.progress {
  display: flex;
  flex: 1;
  margin-left: 5px;
  font-size: 12px;
  color: #ccc;
}
.strip {
  position: relative;
  flex: 1;
  height: 4px;
  background: rgba(40, 22, 22, 0.3);
  margin: 6px 0px 6px 15px;
}
.strip-circle {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  left: 0;
  top: -4px;
}
.strip-active {
  position: absolute;
  height: 100%;
  width: 0;
  background: #fff;
}
.duration-time {
  font-size: 12px;
  color: #ccc;
  margin-left: 15px;
}
</style>