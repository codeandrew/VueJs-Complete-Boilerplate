import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home'
import About from '../pages/about'
import Example from '../pages/example'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name : 'Home',
      component : Home
    },
    {
      path: '/about',
      name : 'About',
      component : About
    },
    {
      path: '/example',
      name : 'Example',
      component : Example
    },
    {
      path: '/login',
      name : 'Login',
      component : Login
    },
    {
      path: '/sign-up',
      name : 'SignUp',
      component : SignUp
    }
  ]
})
