import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './_store';
import './index.css'
import 'tw-elements';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBell, faComments, faHouse, faLocationArrow, faAngleRight, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { backend } from './_helpers';
// backend();

Vue.config.productionTip = false
library.add(faUser, faBell, faComments, faHouse, faLocationArrow, faAngleRight, faBuilding, faCalendar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
