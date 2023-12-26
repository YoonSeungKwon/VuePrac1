import MainView from '@/components/MainView';
import HomeView from '@/components/HomeView';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {path:'/', component:HomeView},
    {path:'/main', component:MainView},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export {router}