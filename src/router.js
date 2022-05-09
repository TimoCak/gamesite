import { createWebHistory, createRouter } from "vue-router";
import Impressum from "@/components/Impressum";
import Home from "@/components/Home";
import Signup from "@/components/Signup";


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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
