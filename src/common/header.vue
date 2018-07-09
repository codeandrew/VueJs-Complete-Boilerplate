<template lang="html">
  <div class="nav-header">
    <b-container>
      <div class="navbrand">
        <!-- <h2 v-if="userChecker"> {{ user.email }} </h2>
        <h2 v-else> Vue Template </h2> -->
        <h2> {{ this.userChecker() }}</h2>
      </div>

      <div>
        <ul class="navbar-nav">
          <router-link v-for="item in routes"
          tag='li' key='item.name' class="nav-link"
          :to="item.path">
            <a > {{ item.name }}</a>
          </router-link>
        </ul>
      </div>
    </b-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'

export default {
  data(){
    return { }
  },

  computed : {
    ...mapState([
      'routes',
      'user'
    ])
  },

  mounted(){
    setTimeout(
      console.log("userChecker : ", this.userChecker)
      , 2500
    )
  },
  methods : {
    userChecker(){
      let user = firebase.auth().currentUser
      console.log( 'checker : ',  user )
      return user != null
        ? user.email
        : "Vue Template"

      // if ( user != null ){
      //   return true
      // } else
    }
  }
}
</script>

<style lang="css">
</style>
