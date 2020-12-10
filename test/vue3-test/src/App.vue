<template>
  <div>
    <Address />
    <Gesture />
  </div>
</template>

<script>
import Address from './components/Address'
import Gesture from './components/Gesture'
export default {
  name: 'App',
  components: {
    Address,
    Gesture
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
