<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in dataTabBar" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{item.name}}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetsImage(item.img)" alt="" />
            <img v-else :src="getAssetsImage(item.activeImg)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import dataTabBar from "@/assets/data/tab-bar";
import { getAssetsImage } from "@/utils/getAssets";
import { ref } from "vue";

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
    &.active {
      color: var(--primary-color);
    }
  }
}
</style>