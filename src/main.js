import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './modules/customBulma.scss'
import Auth from './modules/auth.js'
import Api from './modules/api.js'
import Url from './modules/url.js'
import Info from './modules/info.js'

window.axios = require('axios')
window._ = require('lodash');
window.url = new Url()
window.api = new Api()
window.auth = new Auth()
window.info = new Info()

window.Event = new Vue()
window.Vue = Vue
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
