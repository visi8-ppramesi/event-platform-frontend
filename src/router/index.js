import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '../views/ExploreView.vue'
import FeedView from '../views/FeedView.vue'
import AlertView from '../views/AlertView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EventDetail from '../views/EventDetail.vue'
import FestivalDetail from '../views/FestivalDetail.vue'
import SettingsView from '../views/SettingsView.vue'
import ArtistDetail from '../views/ArtistDetail.vue'
import NotFoundView from '../views/404View.vue'
import CategoryView from '../views/CategoryView.vue'

Vue.use(VueRouter)

const routes = [
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
    component: FeedView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresLoggedOut: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requiresLoggedOut: true
    }
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: ArtistDetail
  },
  {
    path: '/festival/detail',
    name: 'festival',
    component: FestivalDetail
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventDetail
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/category/view',
    name: 'categories',
    component: CategoryView
  },
  {
    path: '*',
    name: '404',
    component: NotFoundView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // const publicPages = ['/login', '/register'];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem('user');
  const loggedIn = localStorage.getItem('uid')
  console.log(loggedIn)

  if(to.meta.requiresLoggedOut && !!loggedIn){
    return next('/')
  }

  if (to.meta.requiresAuth && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router
