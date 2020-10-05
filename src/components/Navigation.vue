<template>
  <div class="nav-container" @click="displayNav=!displayNav">
      <img src="../assets/close.svg" alt="close" v-if="displayNav" />
      <img src="../assets/navicon.svg" alt="navicon" v-else />

      <div class="nav-items" v-if="displayNav">
          <a @click="$router.push('/menu')">Meny</a>
          <a @click="$router.push('/about')">Vårt kaffe</a>
          <a @click="$router.push('/profile')">Min profil</a>
          <a @click="$router.push('/status')">Orderstatus</a>
      </div>

  </div>
</template>


<script>
  export default {
    name: "Navigation",

    data() {
      return {
        displayNav: false
      }
    }
    
  }
</script>


<style lang="scss">
.nav-container {
  cursor: pointer;
  padding: 1rem;


    .nav-items {
      margin-top: -70px;
      margin-left: -16px;
      height: 100vh;
      width: 100vw;
      background: #2F2926;
      color:#FFFFFF;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
}
</style>