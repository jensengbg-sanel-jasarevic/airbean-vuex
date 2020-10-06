import Vue from 'vue';
import Vuex from 'vuex';
import ax from 'axios';
import router from './../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:5000',

    products: [],
    cart: [],
    // Data obj from backend server (orderNumber & ETA)
    confirmedOrder: {},
  },


  mutations: {
    updateProducts(state, data) {
      state.products = data.menu;
    },
    addCart(state, product) {
       // Check if product exists in cart - what index
      // Gets the index of the first element in the array that has same id
      let index = state.cart.findIndex(item => item.id === product.id);

      // if product exists in cart, update the quantity
      if(index >= 0) {
   
      state.cart[index].quantity++

    } else {
      // else add product to cart and assign quantity to 1
      product.quantity = 1;
   
      state.cart.push(product) 
    }
  },
  deleteFromCart(state, id) {
    let index = state.cart.findIndex(item => item.id === id)
    state.cart.splice(index, 1)
  },
  orderConfirmed(state, confirm){
    state.confirmedOrder = confirm.data;
  },
  emptyCart(state){
    state.cart = [];

    // Route to confirmation
    router.push('/status')
  }
},


  actions: {
    
    async fetchProducts(ctx) {

      try {
        let resp = await fetch(`${ctx.state.apiUrl}/beans`);
        let data = await resp.json();

        ctx.commit('updateProducts', data)
      
      } catch(err) {
        console.error(err)
      }
    },

    async postOrder(ctx) {

      let data = await ax.post(`${ctx.state.apiUrl}/orders`)

      // Show order has been successful
      ctx.commit('orderConfirmed', data)

      // Empty cart
      ctx.commit('emptyCart');
    }
  },
 

  getters: {
    
    products: state => {
      return state.products;
    }
  }


})