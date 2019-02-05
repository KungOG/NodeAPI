import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: {
      pizzas: [],
      salads: [],
      beverages: []
    },
    order: []
  },
  mutations: {
    setMenu(state, menu){
      state.menu = menu;
    },
    addItem(state, item){
      state.order.push(item);
    }
  },
  actions: {
    async getMenu(ctx) {
      let menu = await axios.get('http://localhost:3000/Menu');
     

      ctx.commit('setMenu', {
        pizzas: menu.data.menu.filter(item => item.type == 'pizza'),
        salads: menu.data.menu.filter(item => item.type == 'sallad'),
        beverages: menu.data.menu.filter(item => item.type =='dryck')
      })
    }
  }
})
