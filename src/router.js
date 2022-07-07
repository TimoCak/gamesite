import { createWebHistory, createRouter } from "vue-router";
import Impressum from "@/components/Impressum";
import Home from "@/components/Home";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import Store from "@/components/Store";
import Buy from "@/components/Buy";
import Community from "@/components/Community";
import News from "@/components/News"


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
    },
    {
        path: '/communityhub',
        name: "Community",
        component: Community

    },
    {
        path: '/buy/:title',
        name: "Buy",
        component: Buy,
    },
    {
        path: '/news',
        name: "News",
        component: News,
    }
        

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
