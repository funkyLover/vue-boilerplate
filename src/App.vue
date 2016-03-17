<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <a v-link="{ path: '/index' }">Go to /index</a>
      <a v-link="{ path: '/about' }">Go to /about</a>
      <a v-link="{ path: '/hello' }">Go to /hello</a>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  export default {
    store
  }
</script>


