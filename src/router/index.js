import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Home from '../pages/home'
import About from '../pages/about'
import Example from '../pages/example'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

import firebase from 'firebase'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name : 'Home',
      component : Home,
      meta : {
        requiresAuth: false,
        title : "Vue Template",
        metaTags: [
          {
            name: 'Vue Template',
            content: 'Content of Vue Template'
          }
        ]
      }
    },
    // {
    //   path: '/about',
    //   name : 'About',
    //   component : About
    // },
    // {
    //   path: '/example',
    //   name : 'Example',
    //   component : Example
    // },
    {
      path: '/login',
      name : 'Login',
      component : Login,
      meta : {
        requiresAuth: false,
        title : "Login",
        metaTags: [
          {
            name: 'Login',
            content: 'Login'
          }
        ]
      }
    },
    {
      path: '/sign-up',
      name : 'SignUp',
      component : SignUp,
      meta : {
        requiresAuth: false,
        title : "SignUp",
        metaTags: [
          {
            name: 'SignUp',
            content: 'SignUp Users in Firebase'
          }
        ]
      }
    },
    {
      path: '/hello',
      name : 'Hello',
      component : Hello,
      meta : {
        requiresAuth: true,
        title : "Hello",
        metaTags: [
          {
            name: 'Hello',
            content: 'Hello User'
          }
        ]
      }
    },
    {
      path: '/to-do',
      name : 'Todo',
      component : Hello,
      meta : {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach( (to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth )

  if ( requiresAuth && !currentUser ) next('Login')
  // else if ( !requiresAuth && !currentUser) next('Hello')
  else next()
})

export default router
