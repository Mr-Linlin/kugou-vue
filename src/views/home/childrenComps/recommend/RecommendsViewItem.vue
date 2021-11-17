<template>
  <div class="view-item" ref="vitem">
    <div class="item-icon">
      <img :src="ball.iconUrl" alt="" />
    </div>
    <div class="item-text">{{ ball.name }}</div>
  </div>
</template>

<script>
export default {
  name: "RecommendsViewItem",
  props: {
    ball: {
      type: Object,
      default: {},
    },
  },
  methods:{
  }
};
</script>

<style scoped>
.view-item {
  flex: 1;
  margin-right: 3vw;
  font-size: 1vw;
}
.item-icon img {
  background: rgb(255, 245, 244);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>