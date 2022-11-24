<template>
  <div class="city">
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
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getCityAll } from '@/services/modules/city'
import useCityStore from "@/stores/modules/city";

const router = useRouter()

// 搜索功能
const searchValue = ref("")
const onSearch = () => {
  console.log("搜索城市")
}

const onCancel = () => {
  // 返回上一级
  router.back()
}

// tab标签
const tabActive = ref(0)


// 所有城市数据

// 从状态管理模块中获取所有城市数据，避免在此写太多网络请求代码
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = cityStore


</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px;
}
</style>