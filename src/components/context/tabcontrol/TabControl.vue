<template>
  <div class="tab-control">
    <div class="title">评论区</div>
    <ul class="tab-title">
      <li
        class="tab-li"
        v-for="(item, index) in title"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="btnClcik(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default: [],
    },
  },
  methods: {
    //   点击切换评论信息
    btnClcik(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.title {
  margin-left: 15px;
  font-weight: 600;
}
.tab-title {
  display: flex;
  list-style: none;
}
.tab-li {
  padding: 0 10px;
  color: #ccc;
}
.active {
  color: #000;
}
</style>