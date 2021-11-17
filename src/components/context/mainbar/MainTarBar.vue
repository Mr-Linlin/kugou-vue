<template>
  <div class="main-tar-bar">
    <tar-bar>
      <tar-bar-item class="tar-bar-item" path="/home">
        <template v-slot:item-icon>
          <img src="~@/assets/img/common/find.svg" alt="" />
        </template>
         <template v-slot:item-icon_active>
          <img src="~@/assets/img/common/find_active.svg" alt="" />
        </template>
        <template v-slot:item-title>
          <div>发现</div>
        </template>
      </tar-bar-item>
       <tar-bar-item class="tar-bar-item" path="/category">
        <template v-slot:item-icon>
          <img src="~@/assets/img/common/blos.svg" alt="" />
        </template>
        <template v-slot:item-icon_active>
          <img src="~@/assets/img/common/blos_active.svg" alt="" />
        </template>
        <template v-slot:item-title>
          <div>播客</div>
        </template>
      </tar-bar-item>
      <tar-bar-item class="tar-bar-item" path="/profile">
        <template v-slot:item-icon>
          <img src="~@/assets/img/common/profile.svg" alt="" />
        </template>
        <template v-slot:item-icon_active>
          <img src="~@/assets/img/common/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-title>
          <div>我的</div>
        </template>
      </tar-bar-item>
      <tar-bar-item class="tar-bar-item" path="/focus">
        <template v-slot:item-icon>
          <img src="~@/assets/img/common/focus.svg" alt="" />
        </template>
        <template v-slot:item-icon_active>
          <img src="~@/assets/img/common/focus_active.svg" alt="" />
        </template>
        <template v-slot:item-title>
          <div>关注</div>
        </template>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "@/components/common/tarbar/TarBar";
import TarBarItem from "@/components/common/tarbar/TarBarItem";

export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBarItem,
  },
};
</script>

<style scoped>
.tar-bar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0;
}
</style>