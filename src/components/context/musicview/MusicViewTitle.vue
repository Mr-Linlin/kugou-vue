<template>
  <div class="music-title">
    <div class="title">{{subTitle.title}}</div>
    <div class="more">{{subTitle.text}}</div>
  </div>
</template>

<script>
export default {
  name: "MusicViewTitle",
  props: {
    subTitle: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.music-title {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.title {
  font-weight: 1000;
  color: #000;
  margin-left: 15px;
}
.more {
  border: 1px solid #ccc;
  margin-right: 15px;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 15px;
  padding-right: 5px;
}
.more::after {
  position: relative;
  top: 2px;
  left: -2px;
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  background: url("~@/assets/img/home/more.svg");
}
</style>