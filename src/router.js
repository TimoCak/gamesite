import { createWebHistory, createRouter } from "vue-router";
import Impressum from "@/components/Impressum";
import Home from "@/components/Home";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import Store from "@/components/Store"


const routes = [
    {
        path: '/Impressum',
        name: "Impressum",
        component: Impressum
    },
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/signup',
        name: "Signup",
        component: Signup
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/store',
        name: "Store",
        component: Store
    }
        

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
