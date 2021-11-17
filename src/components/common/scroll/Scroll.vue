<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import observeDOM from "@better-scroll/observe-dom";

Bscroll.use(PullUp);
Bscroll.use(observeDOM);

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.initBetterScroll();
  },
  methods: {
    //    初始化scroll
    initBetterScroll() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
    },
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
</style>