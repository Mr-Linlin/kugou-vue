<template>
  <div class="view-item" ref="vitem" @click="btnRouter()">
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
    // 点击进入对应的路由地址
    btnRouter(){
     let path= this.ball.url.split('/')
     console.log('/'+path[2]);
    }
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
  background: rgb(252, 82, 79);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>