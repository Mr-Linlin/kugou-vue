<template>
  <div class="title-bar">
    <div class="photo"><img :src="songInfo.picUrl" alt=""></div>
    <div class="song-name">{{songInfo.name}}</div>
    <div class="author">{{songInfo.author}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CommentsTitleBar",
  computed:{
      ...mapGetters(['songInfo'])
  }
};
</script>

<style scoped>
.title-bar{
    display: flex;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    box-shadow: 0 1px 4px rgba(100,100,100,.2);
}
.photo img{
    width: 100%;
    height: 49px;
    border-radius: 50%;
}
.song-name{
    font-size: 16px;
    margin: 0 10px;
}
.author{
    font-size: 12px;
}
</style>