import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import router from './router/index'

Vue.config.debug = true
// before sync, store do not contain the actions
console.log(store)  // -> undefined
sync(store, router)
// after sync, store also do not contain the actions
console.log(store) // -> undefined

/* eslint-disable no-new */
new Vue({
  store,
  components: { App }
})

router.start(App, '#app')
