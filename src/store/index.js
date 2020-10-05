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
    confirmed: {},
  },


  mutations: {
    updateProducts(state, data) {
      state.products = data.menu;
    },
    addCart(state, product) {
       // Check if product exists in cart - what index
      // Gets the index of the first element in the array that has same id
      let index = state.cart.findIndex(item => item.id === product.id);

      // if in cart - update quantity
      if(index >= 0) {
   
      // ++ quantity property
      state.cart[index].quantity++
      } else {
      // else add to cart with quantity 1
      product.quantity = 1;
   
      state.cart.push(product) 
    }
  },
  orderConfirmed(state, confirm){
    state.confirmed = confirm.data;
  },
  emptyCart(state){
    state.cart = [];

    // Route to confirmation
    router.push('/status')
  },
  deleteFromCart(state, id) {
    let index = state.cart.findIndex(item => item.id === id)
    state.cart.splice(index, 1)
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
      
      let data = await ax.post(`${ctx.state.apiUrl}/orders`, {
        items: ctx.state.cart
      })

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
