<template>
  <div class="cart-container">
      <h1 class="cart-title">Din beställning</h1>      
      <CartProducts v-for="(item, index) in cart" :key="index" :item="item" />
          
      <div class="cart-total">
        <h2>Total</h2>
        <h2 class="cart-totalsum">{{ totalSum }} kr</h2>
        <p>Inkl moms + drönarleverans</p>
      </div>

      <button class="cart-btn" @click="postOrder">Take my money!</button>
  </div>
</template>


<script>
import CartProducts from "./CartProducts";

export default {
  name: "Cart",

  components: {
  CartProducts,
  },
  
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalSum() {
       // Declare empty variabel, loop for each item object in array take the price and quantity then multiply
       // return the variabel with the total sum
      let totalSum = 0;
      this.$store.state.cart.forEach(item => {
          totalSum += item.price * item.quantity;
          });
      return totalSum;
      }
    },

    methods: {
    postOrder() {
      this.$store.dispatch("postOrder");
      //this.$router.push("/status");
    }
  }
  
};
</script>


<style lang="scss">
.cart-container {
  background: #FFFFFF;
  color:#2F2926;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25); 
  border-radius: 3px; 
  margin-top: 3.5rem;
  min-height: fit-content;
  width: 90vw; 

      p {
        font-weight: normal;
        font-size: 12px;
      }
      .cart-title {
        text-align: center;
        font-size: 32px;
      }
      .cart-btn {
        background: #2F2926;
        color: white;
        border-radius: 50px;
        height: 3rem;
        width: 15rem;
        margin-left: 30%;
        margin-bottom: 5%;
        font-size: 1.4rem;
        cursor: pointer;
        border: none;
      }

.cart-total{
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-areas: "left right";
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;

      h2, p {
        margin: 0;
      }

    .cart-totalsum {
      grid-area: right;
      display: flex;
      align-items: center;
    }
  }
}
</style>