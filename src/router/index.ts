import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Showcase from '../views/Showcase.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: '/portfolio',
    redirect: '/portfolio/profile',
    meta: { requiresAuth: true }
  },
  {
    path: '/portfolio/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/portfolio/showcase',
    name: 'Showcase',
    component: Showcase,
    meta: { requiresAuth: true }
  },
  {
    path: '/portfolio/contact',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: true }
  },
  {
    path: '/portfolio/creative',
    name: 'Creative',
    component: Blog,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // Initialize auth state from localStorage
  authStore.initializeAuth()
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  
  if (requiresAuth && !authStore.isAuthenticated) {
    // Redirect to login if trying to access protected route without authentication
    next('/login')
  } else if (requiresGuest && authStore.isAuthenticated) {
    // Redirect to portfolio if trying to access login while authenticated
    next('/portfolio/profile')
  } else {
    next()
  }
})

export default router