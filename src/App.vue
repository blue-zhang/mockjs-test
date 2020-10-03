<template>
  <div id="app">
    <MockList />
  </div>
</template>

<script>
import MockList from './components/MockList.vue'

export default {
  name: 'App',
  components: {
    MockList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
