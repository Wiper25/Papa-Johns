import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

import App from './App.vue'

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
