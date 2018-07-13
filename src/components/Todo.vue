<template lang="html">
  <div class="to-do">
    <h2> To Do </h2>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

export default {

  computed : {
    ...mapState([
      'todo'
    ]),

  },

  methods : {
    ...mapActions([
      'getTodo'
    ])

  },

  beforeMount() {
    //do something before mounting vue instance
    this.getTodo()
  }

}
</script>

<style lang="css" scoped>


</style>
