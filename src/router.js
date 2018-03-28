import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
]



const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!auth.check()) {
      next({ path: '/login' })
      return
    }
  }
  next()
})

export default router
