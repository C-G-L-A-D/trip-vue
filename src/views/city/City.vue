<template>
  <div class="city">
    <div class="top">
      <!-- 城市搜索框 -->
      <van-search
        v-model="searchValue"
        show-action
        placeholder="城市/区域/位置"
        @search="onSearch"
        @cancel="onCancel"
      />

      <!-- 区域tab标签 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <template v-for="(value, key) in allCities" :key="key">
          <!-- name属性绑定tabActive为key值，否则默认为索引 -->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 因为数据较多，为优化性能，提前将所有数据进行加载 -->
      <!-- <city-group :group-data="currentGroup"></city-group> -->
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import CityGroup from './components/city-group.vue'

const router = useRouter();
// 搜索功能
const searchValue = ref("");
const onSearch = () => {
  console.log("搜索城市");
};

const onCancel = () => {
  // 返回上一级
  router.back();
};

// tab标签
const tabActive = ref(0);

// 所有城市数据

// 从状态管理模块中获取所有城市数据，避免在此写太多网络请求代码
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中标签后的数据，直接赋值就不是响应式，所以可以通过计算属性当依赖值发生改变时改变
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {
  // --van-tabs-line-height: 30px;

  // 固定定位，但是旁边的滚动条会在顶部位置也出现，不太好设置
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }

  // .content {
  //   margin-top: 98px;
  // }

  .top {
    position: relative;
    z-index: 9;
  }
  // 局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>