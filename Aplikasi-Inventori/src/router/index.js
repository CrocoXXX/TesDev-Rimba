import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/items/ItemView.vue'
import CreateItemView from '../views/items/CreateView.vue'
import EditItemView from '../views/items/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/item',
      name: 'item',
      component: ItemView
    },
    {
      path: '/item/create',
      name: 'itemCreate',
      component: CreateItemView
    },
    {
      path: '/item/:id/edit',
      name: 'itemEdit',
      component: EditItemView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
