import HelloWorld from '@/components/HelloWorld';
import MainView from '@/components/MainView';
import HomeView from '@/components/HomeView';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {path:'/', component:HelloWorld},
    {path:'/main', component:MainView},
    {path:'/home', component:HomeView},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export {router}