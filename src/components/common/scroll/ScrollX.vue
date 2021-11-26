<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "@better-scroll/core";
import Scrollbar from "@better-scroll/scroll-bar";

Bscroll.use(Scrollbar);
export default {
  name: "ScrollX",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        scrollX: true,
        scrollY: false,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: "clickedPoint",
        },
      });
    },
  },
};
</script>

<style scoped>
</style>