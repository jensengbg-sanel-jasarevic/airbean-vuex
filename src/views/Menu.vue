<template>
  <div class="menu">
      <header class="menu-header">
          
          <div class="menu-header-items">
            <img class="menu-carticon" src="../assets/cart.svg" alt="cart" @click="displayCart=!displayCart"/>
            <p class="menu-counter">{{ totalOrders }}</p>

            <Navigation />
            <Cart v-if="displayCart" />
          </div>
      </header>

      <h1>Meny</h1>
      <section class="menu-products" v-for="item in products" :key="item.id" :item="item">
            <button class="menu-product-btn" @click="addCart(item)">
            <img src="../assets/add.svg" />
            </button>
           
            <h2 class="menu-products-title">{{ item.title }}</h2>
            <p class="menu-products-desc">{{ item.desc }}</p>
            <h2 class="menu-products-price">{{ item.price }} kr</h2>
      </section>

      <footer>
         <img class="bottomBg" src="../assets/bottom.svg" >
     </footer>

  </div>
</template>


<script>
import Navigation from "../components/Navigation"
import Cart from "../components/Cart"

export default {
  name: "Menu",

  components:{ 
  Navigation,
  Cart
  },

  data() {
    return {
        displayCart: false
      }
  },

  computed: {
    products() {
    return this.$store.getters.products;
    },
    totalOrders() {
    let total = 0;
    this.$store.state.cart.forEach(item => {
        total += item.quantity;
        });
    return total;
    }
  },

  methods: {
    addCart(product) {
    this.$store.commit("addCart", product);
    }
  }
  
}
</script>


<style lang="scss" scoped>
.menu {
  background: #F3E4E1;
  color:#2F2926;

      .menu-header {
        background-image: url("../assets/top.svg");
        min-height: 230px;
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .menu-counter {
        grid-area: right;
        background: #E5674E;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        color: white;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        margin-top: 5px;
        }
      .menu-carticon {
        grid-area: right;
        margin-top: 13px;
        background: #2F2926;
        padding: 15px;
        border-radius: 20px;
        cursor: pointer;
        //position: absolute;
        //right: 2%;
      }
      .menu-header-items {
       display: grid;
       grid-template-areas: "left . right";
       grid-template-columns: 5% 85% 10%;
      }
      h1 {
        text-align: center;
        font-size: 42px;
        margin: 0;
      }
      h2 {
        font-size: 23px;
      }

      .menu-products {
        display: grid;
        grid-template-areas: "left center right";
        grid-template-columns: 20% 60% 20%;

            .menu-product-btn {
              grid-area: left;
              border: none;
              border-radius: 20rem;
              width:30%;
              height: 60%;
              margin-top: 13%;
              margin-left: 50%;
              background: #2F2926;
              cursor: pointer;
            }
            .menu-products-title, .menu-products-desc {
            grid-area: center;
            }
            .menu-products-desc {
              margin-top: 50px;
              font-size: 12px;
            }
            .menu-products-price{
              grid-area: right;
            }
      }

      .bottomBg {
        margin-top: 15%;
        width: 100%;
      }
}
</style>