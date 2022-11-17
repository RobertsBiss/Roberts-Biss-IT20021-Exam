import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Songs from '@/views/Songs.vue'
import Albums from '@/views/Albums.vue'
import About from '@/views/About.vue'
import { auth } from '../stores/auth'

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Songs,
    },
    {
        path:'/albums',
        component: Albums,
    },
    {
        path:'/about',
        component:About
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if(auth.is_authenticated==false && to.path !="/login") {
        return "/login";
    } else if (auth.is_authenticated==true && to.path =="/login") {
        return from ? from.path:"/login";
    }
})

export default router