import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    INCREMENT (state, x) {
      state.count += x
    }
  },
  actions: {
    increment: 'INCREMENT'
  }
})

export default store
