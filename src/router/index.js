import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView'
import SeriesView from '../views/SeriesView'
import BookmarkedView from '../views/BookmarkedView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/movies',
		name: 'movies',
		component: MoviesView
	},
	{
		path: '/series',
		name: 'series',
		component: SeriesView
	},
	{
		path: '/bookmarked',
		name: 'bookmarked',
		component: BookmarkedView
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
