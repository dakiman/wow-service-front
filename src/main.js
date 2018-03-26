import Vue from 'vue'
import App from './App.vue'
import router from './router'
import auth from './auth'

window.auth = auth
window.Event = new Vue()
window.axios = require('axios')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
