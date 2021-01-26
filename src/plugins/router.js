import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../pages/Main'
import Chat from '../pages/Chat'

const routes = [
    {
      path: '/',
      name: 'Главная',
      component: Main
    },
    {
      path: '/chat',
      name: 'Чат',
      component: Chat,
      props: true,
    },
  
]

  
export default new Router({
    mode: 'history',
    routes
})
