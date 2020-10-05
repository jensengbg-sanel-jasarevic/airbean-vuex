<template>
  <div class="home" @click="$router.push('/menu')">

    <img src="./../assets/airbeanhome.svg" alt="airbeanhome">
  
  </div>
</template>

<style scoped lang="scss">
.home {
  height: 100vh;
  background-color:#0E927D;
  background-image:url("../assets/left.svg"), url("../assets/right.svg");
  background-repeat: no-repeat;
  background-position: left, right ;
  display: flex;
  justify-content: center;
}
</style>
