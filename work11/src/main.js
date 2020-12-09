import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'normalize.css';
import './CSS/style.css';

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
