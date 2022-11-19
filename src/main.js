import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式重置库
import "normalize.css"
// 引入所有自定义样式
import "./assets/css/index.css"


createApp(App).use(router).mount('#app')
