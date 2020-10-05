<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  
  beforeMount(){
    this.$store.dispatch('fetchProducts');
  }
}
</script>


<style lang="scss">
@import './scss/main';

</style>
