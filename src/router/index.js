import LoginView from '@/views/LoginView';
import HomeView from '@/views/HomeView';
import MemberView from '@/views/MemberView'
import RegisterView from '@/views/RegisterView'
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {path:'/', component:HomeView},
    {path:'/login', component:LoginView},
    {path:'/member/:id', component:MemberView},
    {path:'/register', component:RegisterView},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export {router}