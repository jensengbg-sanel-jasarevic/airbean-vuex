<template>
  <div class="cartitems-container">
  
      <h2 class="cartitems-title">{{ item.title }}
        <p class="cartitems-totalprice">{{ totalPrice }} kr</p>
      </h2> 
                    
       <div class="cartitems-amounts">
        <img class="up-arrow" src="@/assets/up.svg" @click="raise"/>
        <p class="cartitems-quantity">{{ item.quantity }}</p>
        <img class="down-arrow" src="@/assets/down.svg" @click="reduce"/>
      </div>
  
  </div>
</template>


<script>
export default {
name: "CartProducts",

props: {
    item: Object
},

computed: {
  totalPrice() {
    return this.item.price * this.item.quantity;
    }
  },

methods: {
  raise() {
    this.item.quantity++;
  },
  reduce() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      } else {
        this.$store.commit("deleteFromCart", this.item.id);
      }
    }
  }

}
</script>


<style lang="scss">
.cartitems-container {
  display: grid;
  grid-template-areas: ". left right";
  grid-template-columns: 5% 85% 10%;

    .cartitems-title {
      grid-area: left;
    }
    .cartitems-totalprice {
      margin: 0;
    }

    .cartitems-amounts {
      grid-area: right;

          .cartitems-quantity {
            font-size: 14px;
            font-weight: 600;
            margin: 0;
          }
          .up-arrow {
            width: 0.5rem;
            cursor: pointer;
          }
          .down-arrow {
            width: 0.5rem;
            margin-bottom: 5px;
            cursor: pointer;
          }
    }
 }
</style>