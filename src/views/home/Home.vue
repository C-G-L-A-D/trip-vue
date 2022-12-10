<template>
    <div class="home">
        <!-- 标题头 -->
        <HomeNavBar />
        <!-- 轮播图 -->
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <!-- 选择城市 -->
        <HomeLocationSearch />
        <!-- 选择时间 -->
        <HomeDateSelector />
        <!-- 其他选项 -->
        <HomeOtherSelectors />
        <!-- 热门建议 -->
        <HomeHotSugguests :hot-suggests="hotSuggests" />
    </div>
</template>

<script setup>
import HomeNavBar from './components/HomeNavBar.vue'
import HomeLocationSearch from './components/HomeLocationSearch.vue'
import HomeDateSelector from './components/HomeDateSelector.vue'
import HomeOtherSelectors from './components/HomeOtherSelectors.vue'
import HomeHotSugguests from './components/HomeHotSugguests.vue'
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

// 获取热门建议的数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
const { hotSuggests } = storeToRefs(homeStore)
console.log(hotSuggests);
</script>

<style lang="less" scoped>

.banner {
    img {
        width: 100%;
    }
}
</style>