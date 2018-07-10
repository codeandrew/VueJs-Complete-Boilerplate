<template lang="html">
  <div class="nav-header">
    <b-container>
      <div class="nav navbrand">
        <!-- <h2 v-if="userChecker"> {{ user.email }} </h2>
        <h2 v-else> Vue Template </h2> -->
        <h4> {{ this.userChecker() }}</h4>
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

  methods : {
    userChecker(){
      console.log('userChecker : ', this.user)
      return this.user.email != null
        ? this.user.email
        : "Vue Template"

      // if ( user != null ){
      //   return true
      // } else
    }
  }
}
</script>

<style lang="css">
.navbrand {
  margin-top : 10px;
}
</style>
