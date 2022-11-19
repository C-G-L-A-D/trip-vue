<template>
  <div class="tab-bar">
    <template v-for="(item, index) in dataTabBar" :key="index">
      <div class="tab-bar-item">
        <img :src="getAssetsImage(item.img)" alt="" />
        <router-link :to="item.path" class="text">{{item.name}}</router-link>
      </div>
    </template>
  </div>
</template>

<script setup>
import dataTabBar from "@/assets/data/tab-bar"
import { getAssetsImage } from '@/utils/getAssets'
import { ref } from 'vue'

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 34px;
    }
    .text {
        font-size: 12px;
    }
  }
}
</style>