<template>
    <div class="home-date-selector bottom-grey-line" @click="showCalender = true">
        <!-- 入住时间 -->
        <div class="start">
            <span class="tip">入住</span>
            <span>{{startDate}}</span>
        </div>
        <!-- 总共入住时间 -->
        <div class="stay">
            共{{stayDays}}晚
        </div>
        <!-- 离店时间 -->
        <div class="end">
            <span class="tip">离店</span>
            <span>{{endDate}}</span>
        </div>
    </div>
    <van-calendar
      :show="showCalender"
      type="range"
      :round="false"
      :formatter="dateTextFormatter"
      @confirm="onConfirm"
    />
</template>

<script setup>
import { formatMonthDay, getDiffDays } from "@/utils/formatDate";
import { ref } from "@vue/reactivity";

const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(nowDate.getTime() + 1000 * 60 * 60 * 24))
const stayDays = ref(getDiffDays(nowDate, nowDate.getTime() + 1000 * 60 * 60 * 24))
const showCalender = ref(false)

// 自定义日历选择器文字
const dateTextFormatter = (day) => {
    if(day.type === 'start') {
        day.bottomInfo = '入住'
    } else if (day.type === 'end') {
        day.bottomInfo = '离店'
    }
    return day
}

// 选择日期
const onConfirm = (value) => {
    startDate.value = formatMonthDay(value[0])
    endDate.value = formatMonthDay(value[1])
    showCalender.value = false;
    stayDays.value = getDiffDays(value[0], value[1])
}

</script>

<style lang="less" scoped>
.home-date-selector {
    // 日历选择器弹出高度
    --van-calendar-popup-height: 100%;
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
    padding: 0 20px;
    .start, .end {
        display: flex;
        flex-direction: column;
        .tip {
            color: #999;
            font-size: 12px;
        }
    }
}
</style>