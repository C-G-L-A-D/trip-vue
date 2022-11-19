<template>
  <div class="home-location-search">
    <div class="city" @click="cityClick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const cityClick = () => {
    router.push('/city')
}

const positionClick = () => {
    // 获取当前位置方法
    navigator.geolocation.getCurrentPosition((res) => {
        console.log("成功获取位置 ", res)
    }, (err) => {
        console.log("获取位置失败 ", err)
    }, {
        timeout: 6000
    })
}

</script>

<style lang="less" scoped>
.home-location-search {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city {
        flex: 1;
    }
    .position {
        width: 74px;
        position: relative;
        .text {
            font-size: 12px;
        }
        img {
            position: absolute;
            top: -2px;
            margin-left: 4px;
            width: 18px;
            height: 18px;
        }
    }
}
</style>