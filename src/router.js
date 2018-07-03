import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Profile from './views/Profile.vue'
import Items from './views/nested-views/Items.vue'
import Pets from './views/nested-views/Pets.vue'
import SelectHelper from './views/nested-views/SelectHelper.vue'

import store from './store'

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
    component: Dashboard,
    meta: {requiresAuth: true},
    children: [
      { path: '', component: SelectHelper, name: 'dashboard', meta: { requiresAuth: true } },
      { path: 'items', component: Items, name: 'items', meta: { requiresCharacter: true, requiresAuth: true } },
      { path: 'pets', component: Pets, name: 'pets', meta: { requiresCharacter: true, requiresAuth: true } }
    ]
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
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
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
  if (to.meta.requiresCharacter) {
    if (_.isEmpty(store.state.character)) {
      next({ path: '/dashboard' })
      return
    }
  }
  next()
})

export default router
