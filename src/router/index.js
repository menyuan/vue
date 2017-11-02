import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Form from '@/components/Form'
import Reg from '@/components/Reg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
