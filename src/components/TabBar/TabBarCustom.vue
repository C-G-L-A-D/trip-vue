<template>
  <!-- 自定义 TabBar -->
  <div class="tab-bar">
    <template v-for="(item, index) in dataTabBar" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item.path)"
      >
        <img v-if="currentIndex !== index" :src="getAssetsImage(item.img)" alt="" />
        <img v-else :src="getAssetsImage(item.activeImg)" alt="" />
        <span :to="item.path" class="text">{{ item.name }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import dataTabBar from "@/assets/data/tab-bar";
import {useRouter} from "vue-router";
import { getAssetsImage } from "@/utils/getAssets";
import { ref } from "vue";

const currentIndex = ref(0)

const router = useRouter()

const itemClick = (index, path) => {
    currentIndex.value = index;
    router.push(path)
}

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