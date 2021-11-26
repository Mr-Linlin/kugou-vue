<template>
  <div class="music-calendar">
    <music-view>
      <music-view-title :subTitle="subTitle" />
      <div
        class="calendar-item"
        v-for="(item, index) in creatives"
        :key="index"
      >
        <calendra-item :calendar="getCalendar(item)" />
      </div>
    </music-view>
  </div>
</template>

<script>
import MusicView from "@/components/context/musicview/MusicView";
import MusicViewTitle from "@/components/context/musicview/MusicViewTitle";
import CalendraItem from "./CalendraItem";

import { MusicList } from "@/common/mixin";
import { CalendarInfo } from "@/network/home";
export default {
  name: "MusicCalendar",
  components: {
    MusicView,
    MusicViewTitle,
    CalendraItem,
  },
  mixins: [MusicList],
  methods: {
    getCalendar(item) {
      const obj = new CalendarInfo(
        item.resources[0].resourceExtInfo,
        item.resources[0].uiElement
      );
      return obj;
    },
  },
};
</script>

<style scoped>
.music-calendar {
  margin-top: 20px;
  box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.1);
}
</style>