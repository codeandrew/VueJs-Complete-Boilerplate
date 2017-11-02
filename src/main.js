// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
Vue.config.productionTip = false

//======================
// Components
import header from './common/header'
import footer from './common/footer'

Vue.component('head-component', header )
Vue.component('foot-component', footer )



//==================

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
