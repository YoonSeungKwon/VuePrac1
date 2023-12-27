import MainView from '@/components/MainView';
import HomeView from '@/components/HomeView';
import MemberView from '@/components/MemberView'
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {path:'/', component:HomeView},
    {path:'/main', component:MainView},
    {path:'/member/:id', component:MemberView},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export {router}