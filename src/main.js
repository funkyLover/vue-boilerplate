import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import store from './store/index'
import router from './router/index'

Vue.config.debug = true
// before sync, store do not contain the actions
console.log(store.actions)  // -> undefined
sync(store, router)
// before sync, store also do not contain the actions
console.log(store.actions) // -> undefined

router.start(App, '#app')
