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
            component: () => import("@/views/home/Home.vue"),
            meta: {
                showTabBar: true
            }
        },
        {
            path: "/message",
            component: () => import("@/views/message/Message.vue"),
            meta: {
                showTabBar: true
            }
        },
        {
            path: "/order",
            component: () => import("@/views/order/Order.vue"),
            meta: {
                showTabBar: true
            }
        },
        {
            path: "/favor",
            component: () => import("@/views/favor/Favor.vue"),
            meta: {
                showTabBar: true
            }
        },
        {
            path: "/city",
            component: () => import("@/views/city/City.vue")
        }
    ]
})

export default router