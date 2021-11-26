<template>
  <div class="calendar-item">
    <div class="item-news">
      <div class="time">
        <span>{{ getTime }}</span>
        <span class="hot" v-for="(item, index) in calendar.tags" :key="index">{{
          item
        }}</span>
      </div>
      <div class="title">{{ calendar.title }}</div>
    </div>
    <div class="item-img">
      <img :src="calendar.imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendraItem",
  props: {
    calendar: {
      type: Object,
      default: {},
    },
  },
  computed: {
    getTime() {
      const t = new Date(this.calendar.time);
      const y = t.getFullYear();
      const m = t.getMonth() + 1;
      const d = t.getDate();
      return `${y}-${m}-${d}`;
    },
  },
};
</script>

<style scoped>
.calendar-item {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  height: 51px;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}
.item-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: 5px;
}
.time {
  margin-top: 8px;
}
.time span:first-child {
  color: #ccc;
  margin-right: 10px;
  font-size: 14px;
}
.hot {
  color: rgb(243, 202, 173);
  font-size: 12px;
  background: rgb(251, 245, 241);
  padding: 2px;
}
.title {
  margin: 8px 0;
  font-weight: 600;
}
</style>