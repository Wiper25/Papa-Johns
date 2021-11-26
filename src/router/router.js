import Vue from 'vue';
import Router from 'vue-router';

import App from '../App.vue'
import Order from '../router/order.vue'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        }
    ]
});

export default router
