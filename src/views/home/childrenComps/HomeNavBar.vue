<template>
  <div class="home-nav">
    <nav-bar>
      <template v-slot:nav-left>
        <div class="side">
          <img src="~@/assets/img/home/side.svg" alt="" />
        </div>
      </template>
      <template v-slot:nav-center>
        <div class="search">
          <span>大家都在搜浪漫主义</span>
        </div>
      </template>
      <template v-slot:nav-right>
        <div class="trackd">
          <img src="~@/assets/img/home/trackd.svg" alt="" />
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "HomeNavBar",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.home-nav {
  position: relative;
  /* background: rgba(217, 217, 227, 0.4); */
  background: rgb(217, 217, 227);
  z-index: 999;
  top: 0;
}
.side,
.trackd {
  margin-top: 6px;
  margin-left: 10px;
}
.side,
.trackd img {
  width: 30px;
}
.search {
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(100, 100, 100, 0.2);
  height: 38px;
  margin-top: 3px;
  line-height: 38px;
  color: rgb(209, 209, 209);
  font-size: 14px;
}
.search span::before {
  display: inline-block;
  position: relative;
  content: "";
  width: 16px;
  height: 16px;
  background: url("~@/assets/img/home/search.svg");
  top: 3px;
  right: 5px;
}
</style>