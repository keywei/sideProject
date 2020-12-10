import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todo',
        component: () => import('../views/Todo.vue')
    },
    {
        path: '/finished',
        component: () => import('../views/Finished.vue')
    }
];

export default new VueRouter({
    routes,
});