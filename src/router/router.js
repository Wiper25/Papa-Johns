import Vue from 'vue';
import Router from 'vue-router';

import Home from '../view/Home.vue'
import Order from '../view/Order.vue'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        }
    ]
});

export default router
