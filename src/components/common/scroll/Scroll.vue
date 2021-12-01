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
        PullUp: true,
      });
      // 当滑到最后一个时显示加载更多
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore", "加载更多");
      });
    },
    // 获取当前距离顶部的距离
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    // 返回指定的距离
    scrollTop(x, y, time = 200) {
      this.scroll.scrollTo(x, y, time);
    },
    // 实时监听所有图片高度，进行刷新
    refresh() {
      // console.log("-----------");
      this.scroll && this.scroll.refresh();
    },
    //  每次触发 pullingUp 钩子后，你应该主动调用 finishPullUp() 告诉 BetterScroll 准备好下一次的 pullingUp 钩子
    finishPullUp() {
      this.scroll.finishPullUp();
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