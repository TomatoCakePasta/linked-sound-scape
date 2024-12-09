import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DisplayView from "../views/Display.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/display",
    name: "display",
    component: DisplayView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router