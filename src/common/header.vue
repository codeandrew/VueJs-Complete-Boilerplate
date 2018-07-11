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
          <router-link
          v-for="item in publicRoutes"
          tag='li'
          key='item.name'
          class="nav-link"
          :to="item.path"
          v-if="!user.email" >
            <a > {{ item.name }}</a>
          </router-link>

          <router-link
          v-for="item in authRoutes"
          tag='li'
          key='item.name'
          class="nav-link"
          :to="item.path"
          v-if="user.email" >
            <a > {{ item.name }}</a>
          </router-link>

          <b-button
           variant="outline-success"
           size="sm"
           class='logout'
           v-if="user.email" >
           Sign Out
         </b-button>

        </ul>
      </div>
    </b-container>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  data(){
    return { }
  },

  computed : {
    ...mapState([
      'routes',
      'user'
    ]),

    ...mapGetters([
      'authRoutes',
      'publicRoutes'
    ])
  },

  beforeMount(){
    console.log( 'authRoutes', this.authRoutes )
    console.log( 'publicRoutes', this.publicRoutes )
  },

  methods : {
    userChecker(){
      console.log('userChecker : ', this.user)
      return this.user.email != null
        ? this.user.email
        : "Vue Template"
    }
  }
}
</script>

<style lang="css">
.navbrand {
  margin-top : 10px;
}
</style>
