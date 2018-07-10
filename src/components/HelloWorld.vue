<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h2> {{ auth }}</h2>
    <p> {{user }}</p>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="">
      <b-button @click="logOut" name="button"> Sign Out</b-button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

export default {

  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      auth : "Auth "
    }
  },

  mounted(){
    let user = firebase.auth().currentUser

    if (user != null) {
      this.getFirebaseUser(user)
    }
  },
  computed : {
    ...mapState([
      'user'
    ])


  },

  methods : {
    ...mapActions([
      'getFirebaseUser',
      'logOut'
    ]),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
