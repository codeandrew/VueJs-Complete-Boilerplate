// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from 'vuex'
import { store } from './store'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

//======================
// Components
import header from './common/header'
import footer from './common/footer'
import infoCol from './components/info-col'
import infoSection from './components/info-section'

Vue.component('head-component', header )
Vue.component('foot-component', footer )
Vue.component('info-col', infoCol )
Vue.component('infoSection', infoSection )

const config = {
  apiKey: "AIzaSyB8PthQVcXILdk398_PcpBb6lOJ18obofE",
  authDomain: "to-do-app-876b4.firebaseapp.com",
  databaseURL: "https://to-do-app-876b4.firebaseio.com",
  projectId: "to-do-app-876b4",
  storageBucket: "to-do-app-876b4.appspot.com",
  messagingSenderId: "600361348663"
};

firebase.initializeApp(config);

//==================

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store : store,
  router,
  template: '<App/>',
  components:  { App }
})
