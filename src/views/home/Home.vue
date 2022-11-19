<template>
    <div class="home">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeLocationSearch />
    </div>
</template>

<script setup>
import HomeNavBar from './components/HomeNavBar.vue'
import HomeLocationSearch from './components/HomeLocationSearch.vue'
</script>

<style lang="less" scoped>

.banner {
    img {
        width: 100%;
    }
}

</style>