<template lang="html">
  <div class="sign-up">
    <p> {{ subheader }}</p>
    <img src="../assets/logo.png">
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <b-button @click="signUp" variant="success">
      Sign Up
    </b-button>
    <br>
    <span> or go back to
      <router-link to="/login">
        login
      </router-link>
    </span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name : 'signUp',
  data(){
    return {
      subheader : "Let's Create a new account !",
      email : '',
      password : ''
    }
  },

  methods : {
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then( user => {
        alert('Account has been created !')
      }, ( err ) => {
        alert('Oops! ' + err.message )
      })
    }
  }
}
</script>

<style lang="scss">

</style>
