import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import('../views/Todo.vue')
    },
    {
        path: '/finished',
        name: 'Finished',
        component: () => import('../views/Finished.vue')
    }
];

const router = new VueRouter({
    routes,
});

export default router;