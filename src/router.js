import { createWebHistory, createRouter } from "vue-router";
import Impressum from "@/components/Impressum";
import Home from "@/components/Home";


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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
