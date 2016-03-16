import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from '../components/Index'
import About from '../components/About'
import Hello from '../components/Hello'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/index': {
    component: Index
  },
  '/about': {
    component: About
  },
  '/hello': {
    component: Hello
  }
})

export default router
