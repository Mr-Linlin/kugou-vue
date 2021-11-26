<template>
  <div
    class="list-block"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <div class="list-block-content" :style="{ width: mixWidth }" ref="content">
      <div class="block-item" v-for="(item, index) in resources" :key="index">
        <music-list-block-item :resources="item.resources" ref="blockItem" />
      </div>
    </div>
  </div>
</template>

<script>
import MusicListBlockItem from "./MusicListBlockItem";

export default {
  name: "MusicListBlock",
  components: {
    MusicListBlockItem,
  },
  data() {
    return {
      startX: 0,
      moveX: 0,
      currentIndex: 0,
      startLeft: 0,
      imgWidth: 0,
      itemWidth: 0,
    };
  },
  props: {
    resources: {
      type: Array,
      defalut: [],
    },
  },
  computed: {
    mixWidth() {
      return this.resources.length * 95 + "%";
    },
  },
  mounted() {
    this.$refs.content.style.transform = "translateX(0px)";
  },
  methods: {
    touchStart(e) {
      this.imgWidth = this.$refs.blockItem.$el.offsetWidth;
      this.startX = e.changedTouches[0].pageX;
      this.startLeft = parseFloat(
        this.$refs.content.style.transform.split("(")[1]
      );
    },
    touchMove(e) {
      this.moveX = e.changedTouches[0].pageX - this.startX;
      this.$refs.content.style.transform =
        "translateX(" + (this.moveX + this.startLeft) + "px)";
    },
    touchEnd(e) {
      this.moveX = e.changedTouches[0].pageX - this.startX;
      if (Math.abs(this.moveX) > 30) {
        if (this.moveX > 0) {
          this.currentIndex--;
          if (this.currentIndex <= 0) {
            this.currentIndex = 0;
          }
        }
        if (this.moveX < 0) {
          this.currentIndex++;
          if (this.currentIndex >= this.resources.length) {
            this.currentIndex = this.resources.length - 1;
          }
        }
        this.$refs.content.style.transition = ".5s";
        this.$refs.content.style.transform =
          "translateX(" + -this.currentIndex * this.imgWidth + "px)";
      }
    },
  },
};
</script>

<style scoped>
.list-block {
  padding-left: 15px;
  overflow: hidden;
}
.list-block-content {
  display: flex;
}
.block-item {
  flex: 1;
}
</style>