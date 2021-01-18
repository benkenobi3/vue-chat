import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../pages/Main'

const routes = [
    {
      path: '/',
      name: 'Главная',
      component: Main
    },
]
  
export default new Router({
    mode: 'history',
    routes
})