<template>
  <div class="comments-bar">
    <nav-bar>
      <template v-slot:nav-left>
        <div class="back" @click="backClick">
          <img src="~@/assets/img/comments/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:nav-center>
        <div class="title">
          <span class="song-name">评论({{total}})</span>
        </div>
      </template>
      <template v-slot:nav-right>
        <div class="share">
          <img src="~@/assets/img/comments/share.svg" alt="" />
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "CommentsNavBar",
  components: {
    NavBar,
  },
  props:{
      total:{
          type:Number,
          default:0
      }
  },
  methods:{
      /**
       * 处理网络请求
       */
      /**
       * 处理事件请求
       */
      backClick(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.back img,
.share img {
  position: relative;
  top: 5px;
  width: 24px;
  height: 24px;
}
.title{
    color: #000;
    font-weight: 600;
}
</style>