import hyRequest from '../request'

// 获取首页热门城市建议
export function getHomeHotSuggests() {
    return hyRequest.get({
        url: "/home/hotSuggests"
    })
}