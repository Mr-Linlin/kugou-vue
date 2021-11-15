import { createRouter, createWebHistory } from 'vue-router'

const Home = () => { return import ('@/views/home/Home') }
const Category = () => { return import ('@/views/category/Category') }
const Profile = () => { return import ('@/views/profile/Profile') }
const Focus = () => { return import ('@/views/focus/Focus') }

const routes = [
    { path: '/', redirect: { name: "home" } },
    { path: '/home', name: "home", component: Home },
    { path: '/category', name: "category", component: Category },
    { path: '/profile', name: "profile", component: Profile },
    { path: '/focus', name: "focus", component: Focus },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router