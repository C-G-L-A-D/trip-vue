import dayjs from "dayjs"

// 格式化日期
export function formatMonthDay(date) {
    return dayjs(date).format("MM月DD日")
}

// 获取时间差值
export function getDiffDays(startDate, endDate) {
    return dayjs(endDate).diff(startDate, "day")
}