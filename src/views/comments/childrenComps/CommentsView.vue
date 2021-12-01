<template>
  <div class="comments-view">
    <div class="comments-item" v-for="(item, index) in comments" :key="index">
      <div class="item-title">
        <div class="author-name">
          <div class="avatar"><img :src="item.user.avatarUrl" alt="" @load="loadImg"/></div>
          <div class="author-title">
            <p class="nickname">{{ item.user.nickname }}</p>
            <span class="time">{{ getTime(item.time) }}</span>
          </div>
        </div>
        <div class="praise">
          {{ item.likedCount }}
          <img src="~@/assets/img/comments/praise.svg" alt="" />
        </div>
      </div>
      <div class="comments-content">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsView",
  props: {
    comments: {
      type: Array,
      default: [],
    },
  },
  methods: {
    //   格式化时间搓
    getTime(time) {
      let t = new Date(time);
      let y = t.getFullYear();
      let m = t.getMonth() + 1;
      let day = t.getDate();
      return `${y}年${m}月${day}日`;
    },
    //   图片是否加载完成
    loadImg() {
      this.$emit('loadImg')
    },
  },
};
</script>

<style scoped>
.comments-item {
  border-bottom: 1px solid #ccc;
}
.item-title {
  display: flex;
  justify-content: space-between;
  height: 44px;
  margin: 0 15px;
  /* background: pink; */
}
.author-name {
  display: flex;
  padding-top: 7px;
}
.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.author-title {
  margin-left: 10px;
}
.nickname {
  font-size: 14px;
}
.time {
  font-size: 12px;
}
.comments-content {
  padding-left: 55px;
  padding-right: 15px;
  padding-bottom: 20px;
  font-size: 14px;
}
.praise {
  font-size: 12px;
  color: #ccc;
  padding-top: 15px;
}
</style>