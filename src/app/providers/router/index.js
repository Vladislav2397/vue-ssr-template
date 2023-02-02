import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'Index',
                component: Home,
            },
        ],
    })
}
