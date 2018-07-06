<template lang="html">
  <div class="about article">
    <b-container>
    <h1>About Page</h1>
    <br />
      <p v-for="item in about"> {{ item }} </p>
      <ul class='about-list'>
        <li v-for="item in dependencies"> {{ item }}</li>
      </ul>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      about : [
        'This is a boiler Template of VueJs to reduce time in setting up and more on actual coding',
        'together with: '
      ]
    }
  },

  computed : {
    ...mapState([
      'dependencies'
    ])
  },

  mounted(){
    console.log( this.dependencies )
  }
}
</script>

<style lang="css">
.about-list {
  width : 200px;
  margin: 0 auto;
}
</style>
