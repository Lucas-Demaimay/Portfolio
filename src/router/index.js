import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
			path: '/',
			name: 'home',
			component: HomeView
		},
    {
			path: '/about',
			name: 'about',
			component: AboutView
		},
    {
			path: '/experience',
			name: 'experience',
			component: HomeView
		},
    {
			path: '/projects',
			name: 'projects',
			component: HomeView
		},
  ],
})

export default router
