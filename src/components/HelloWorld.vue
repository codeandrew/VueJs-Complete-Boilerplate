<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h2> {{ auth }}</h2>
    <p> {{user }}</p>
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
    const userValues = Object.values(this.user)

    console.log('userValues', userValues )
    // const list = this.user.map( x => x.userKeys[x] )
    // console.log( 'list', list )

  },
  computed : {
    ...mapState([
      'user'
    ])


  },

  methods : {
    ...mapActions([
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
