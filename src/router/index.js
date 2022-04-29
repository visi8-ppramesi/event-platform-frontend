import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ExploreView from '../views/ExploreView.vue'
// import FeedView from '../views/FeedView.vue'
// import AlertView from '../views/AlertView.vue'
// import ProfileView from '../views/ProfileView.vue'
// import LoginView from '../views/LoginView.vue'
// import RegisterView from '../views/RegisterView.vue'
// import EventDetail from '../views/EventDetail.vue'
// import FestivalDetail from '../views/FestivalDetail.vue'
// import SettingsView from '../views/SettingsView.vue'
// import ArtistDetail from '../views/ArtistDetail.vue'
// import NotFoundView from '../views/404View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import("../views/ExploreView.vue")
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import("../views/FeedView.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import("../views/AlertView.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("../views/ProfileView.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginView.vue"),
    meta: {
      requiresLoggedOut: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/RegisterView.vue"),
    meta: {
      requiresLoggedOut: true
    }
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: () => import("../views/ArtistDetail.vue")
  },
  {
    path: '/festival/detail',
    name: 'festival',
    component: () => import("../views/FestivalDetail.vue")
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import("../views/EventDetail.vue")
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import("../views/SettingsView.vue")
  },
  {
    path: '*',
    name: '404',
    component: () => import("../views/404View.vue"),
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
