<template>
  <div class="tar-bar-item" @click="btnRoute">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon_active"></slot></div>
    <div :style="isActiveColor"><slot name="item-title"></slot></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props:{
      path:{
          type:String
      },
      activeColor:{
        type:String,
        default:"rgb(247, 134, 138)"
      }
  },
  methods:{
      btnRoute(){
          return this.$router.push(this.path)
      }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)==-1
    },
    isActiveColor(){
      return !this.isActive?{color:this.activeColor}:{}
    }
  }
};
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  font-size: 12px;
  text-align: center;
}
</style>