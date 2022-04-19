import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './_store';
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBell, faComments, faHouse, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { backend } from './_helpers';
// backend();

Vue.config.productionTip = false
library.add(faUser, faBell, faComments, faHouse, faLocationArrow)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
