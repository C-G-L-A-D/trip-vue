import hyRequest from '../request'

// 获取所有城市数据
export function getCityAll() {
    return hyRequest.get({
        url: "/city/all"
    })
}