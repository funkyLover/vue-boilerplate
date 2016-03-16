<template>
  <div class="index">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    msg: function () {
      // bug? the store object not contain the actions
      // store.actions.increment(1)
      // console.log(store.actions) -> undefined
      store.dispatch('INCREMENT', 1)
      return 'hello' + store.state.route.path + store.state.count
    }
  }
}
</script>
