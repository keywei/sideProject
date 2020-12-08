import Vue from 'vue';
import 'normalize.css';
import './CSS/style.css';
import App from './App.vue';
import store from './store';
import router from './router';

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
