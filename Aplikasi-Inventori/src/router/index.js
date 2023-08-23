import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/items/ItemView.vue'
import CreateItemView from '../views/items/CreateView.vue'
import EditItemView from '../views/items/EditView.vue'

import CustomerView from '../views/customers/CustomerView.vue'
import CreateCustomerView from "../views/customers/CreateCustomer.vue";
import EditCustomerView from "../views/customers/EditCustomer.vue";

import SalesView from '../views/sales/SalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Items
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

    // Customers
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView
    },
    {
      path: '/customer/create',
      name: 'customerCreate',
      component: CreateCustomerView
    },
    {
      path: '/customer/:id/edit',
      name: 'customerEdit',
      component: EditCustomerView
    },

    // Sales
    {
      path: '/sales',
      name: 'sales',
      component: SalesView
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
