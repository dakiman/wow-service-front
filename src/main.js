import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from './auth.js'

window.axios = require('axios')
window.auth = new Auth()

window.Event = new Vue()
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

