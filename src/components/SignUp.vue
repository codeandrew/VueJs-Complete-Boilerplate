<template lang="html">
  <div class="sign-up">
    <p> {{ subheader }}</p>
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <b-button  variant="success">
      Sign Up
    </b-button>
    <span> or go back to
      <router-link to="/login">
        login
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      subheader : "Let's Create a new account !"
    }
  }
}
</script>

<style lang="scss">

.sign-up {
  margin-top : 40px;

  input {
    margin : 10px auto;
    width : 300px;
    padding : 15px;
    display : block;
  }

  button {
    margin-top : 10px;
    width: 150px;
    cursor: pointer;
  }
}

span {
  display : block;
  margin-top : 20px;
  font-size : 11px;
}


</style>
