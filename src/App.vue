<template>
  <div id="app">
    <head-component/>
      <img src="./assets/logo.png">
      <router-view/>
    <foot-component/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
   @import './scss/main.scss';
</style>
