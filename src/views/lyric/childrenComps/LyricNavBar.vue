<template>
  <div class="lyric-nav-bar">
    <nav-bar>
      <template v-slot:nav-left>
        <div class="back">
          <img src="~@/assets/img/lyric/pack.svg" alt="" />
        </div>
      </template>
      <template v-slot:nav-center>
        <div class="title">
          <span class="song-name">{{songInfo.name}}</span>
          <span class="author">{{songInfo.author}}</span>
        </div>
      </template>
      <template v-slot:nav-right>
        <div class="share">
          <img src="~@/assets/img/lyric/share.svg" alt="" />
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { mapGetters } from "vuex";
export default {
  name: "LyricNavBar",
  components: {
    NavBar,
  },
  computed:{
      ...mapGetters(['songInfo'])
  }
};
</script>

<style scoped>
.author{
    font-size: 12px;
    color: #ccc;
    margin-left: 10px;
}
.back img,.share img{
    position: relative;
    top: 10px;
    width: 24px;
    height: 24px;
}
</style>