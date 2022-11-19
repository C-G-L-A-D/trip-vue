import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    // 映射关系
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: () => import("@/views/home/Home.vue")
        },
        {
            path: "/message",
            component: () => import("@/views/message/Message.vue")
        },
        {
            path: "/order",
            component: () => import("@/views/order/Order.vue")
        },
        {
            path: "/favor",
            component: () => import("@/views/favor/Favor.vue")
        }
    ]
})

export default router