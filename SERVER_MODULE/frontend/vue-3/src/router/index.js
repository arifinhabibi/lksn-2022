import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forbidden404View from '../views/Forbidden404View.vue'
import LoginView from '../views/LoginView.vue'
import CreateFormView from '../views/CreateFormView.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Forbidden404View
  },{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/create-form',
    name: 'createForm',
    component: CreateFormView
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
