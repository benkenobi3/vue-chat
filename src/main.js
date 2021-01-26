import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './plugins/router.js'
import store from './plugins/vuex.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.prototype.$http = Axios

new Vue({

  store,
  router,

  render: h => h(App),

}).$mount('#app')
