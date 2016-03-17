import Vuex from 'vuex'
import Vue from 'vue'
import { INCREMENT } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    [INCREMENT] (state, x) {
      state.count += x
    }
  }
})
