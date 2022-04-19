import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '../views/ExploreView.vue'
import FeedView from '../views/FeedView.vue'
import AlertView from '../views/AlertView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
// import { User } from '../firebase/index.js'

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
