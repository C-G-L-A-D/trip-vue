// 二次封装 axios，降低耦合度,方便替换其他网络请求工具
import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config.js'

class HYRequest {
    constructor(baseURL, timeout=10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "GET"})
    }

    post(config) {
        return this.request({...config, method: "POST"})
    }
}

export default new HYRequest(BASE_URL, TIMEOUT)