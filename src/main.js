import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
// import store from './store'
import router from './components/element/router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.prototype.$http = Axios

new Vue({

  // store, может пригодиться
  router,

  render: h => h(App),

}).$mount('#app')
