import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";
import MyImages from "./components/pages/MyImages.vue";
import Login from "./components/pages/Login.vue";
import Signup from "./components/pages/Signup.vue";
import Home from "./components/pages/Home.vue";
import NotFound from "./components/pages/NotFound.vue";



const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/", // Default route
                name: "Home",
                component: Home,
            },
            {
                path: "/images",
                name: "MyImages",
                component: MyImages,
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/signup',
                name: 'Signup',
                component: Signup,
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'notFound',
                component: NotFound,
            },
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


export default router;