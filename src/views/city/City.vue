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
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter()

// 搜索功能
const searchValue = ref("")
const onSearch = () => {
  console.log("搜索城市")
}

const onCancel = () => {
  router.back()
}

// tab标签
const tabActive = ref(0)

</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px;
}
</style>