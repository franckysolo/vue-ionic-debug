import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Debug from '../views/Debug.vue'
import Scan from '../views/Scan.vue'
import Login from '../views/Login.vue'
import LifeCycle from '../views/LifeCycle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lifecycle',
    name: 'LifeCycle',
    component: LifeCycle
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ion-select',
    name: 'Ion-Select-Issue',
    component: Debug
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
