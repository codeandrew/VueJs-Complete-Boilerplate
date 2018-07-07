<template lang="html">
  <div class="login">
    <img src="../assets/logo.png">
    <h3>Sign In</h3>
    <input type="text" v-model="email" value="" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">

    <b-button @click="signIn" variant="success" name="button">
      Sign In
    </b-button>

    <p>You don't have account ?
      <router-link to="/sign-up">
        You can create one
      </router-link>
     </p>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name : 'login',
  data(){
    return {
      email : '',
      password : ''
     }
  },

  methods: {
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          alert('Well done! ' + user.user.email + ' You are now Connected')
          console.log(user)
        },
        err => {
          alert('Oops! ' + err.message )
        })
    }

  }
}
</script>

<style lang="scss">
  .login {
    margin-top : 40px;

    input {
      margin : 10px auto;
      width : 300px;
      padding : 15px;
      display : block;
    }

  }
  button {
    margin-top : 20px;
    width: 150px;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size : 13px;
    a {
      text-decoration : underline;
      cursor : pointer;
    }
  }



</style>
