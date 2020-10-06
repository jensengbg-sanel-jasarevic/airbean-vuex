<template>
  <div class="status">
      <h3>Ordernummer #{{ confirmation.orderNr }}</h3>

      <img src="../assets/drone.svg" alt="drone" />  
      <h1>Din beställning är på väg!</h1>
      <h2>{{ confirmation.eta }} minuter</h2>
      
      <button class="status-ok-btn" @click="$router.push('/menu')">Ok, cool!</button>
      
  </div>
</template>


<script>
export default {
    name: 'Status',

    computed: {
        confirmation(){
            return this.$store.state.confirmedOrder;
        }
    }
}
</script>


<style scoped lang="scss">
.status {
 height: 100vh;
 background: #E5674E;
 color: #FFFFFF;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 text-align: center;

    .status-ok-btn { 
    background: #FFFFFF;
    border-radius: 50px;
    border:none;
    padding: 15px 55px;
    font-size: 24px;
    cursor: pointer;
    margin-left: 33vw;
    margin-right: 33vw;
    }
}
</style>
