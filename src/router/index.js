import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../components/Portfolio.vue'
import Gallery from '../components/Gallery.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
