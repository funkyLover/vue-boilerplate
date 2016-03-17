<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { increment } from '../vuex/actions'

export default {
  vuex: {
    actions: {
      increment
    },
    getters: {
      count: state => state.count,
      path: ({ route }) => route.path
    }
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    msg: function () {
      this.increment(3)
      return 'hello' + this.path + this.count
    }
  }
}
</script>
