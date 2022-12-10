<template>
  <div class="home-location-search bottom-grey-line">
    <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
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

// 获取当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

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