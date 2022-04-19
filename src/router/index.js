import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '../views/ExploreView.vue'
import FeedView from '../views/FeedView.vue'
import AlertView from '../views/AlertView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ArtistDetail from '../views/ArtistDetail.vue'
import EventDetail from '../views/EventDetail.vue'
import SettingsView from '../views/SettingsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/feed',
    name: 'feed',
    component: FeedView
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/artist/detail',
    name: 'artist',
    component: ArtistDetail
  },
  {
    path: '/event/detail',
    name: 'event',
    component: EventDetail
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// });

export default router
