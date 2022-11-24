<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="cityIndexList">
      <!-- 热门城市分组 -->
      <van-index-anchor index="热门" />
      <div class="hotCitiesList">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="hotCitiesItem" @click="cityClick(item)">{{item.cityName}}</div>
        </template>
      </div>

      <!-- 所有城市分组 -->
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <van-cell
          v-for="(city, i) in group.cities"
          :key="i"
          :title="city.cityName"
          @click="cityClick(city)"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

// 动态获取索引
const cityIndexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市点击事件
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  // 保存当前所选城市
  cityStore.currentCity = city

  // 返回上一级
  router.back()
}
</script>

<style lang="less" scoped>
.hotCitiesList {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  flex-wrap: wrap;
  .hotCitiesItem {
    height: 28px;
    width: 70px;
    background-color: #fff4ec;
    border-radius: 14px;
    font-size: 12px;
    text-align: center;
    line-height: 28px;
    margin: 6px 0;
  }
}
</style>