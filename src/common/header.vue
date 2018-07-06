<template lang="html">
  <div class="nav-header">
    <b-container>
      <div class="navbrand">
        <h2>NavBrand </h2>
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

export default {
  data(){
    return { }
  },

  computed : {
    ...mapState([
      'routes'
    ])
  },

  mounted(){
    console.log(this.routes)
  }
}
</script>

<style lang="css">
</style>
