<template>
  <div id="app">
    <Navbar />
    <!-- <Index /> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'

export default {
  name: 'App',
  components: {
    Navbar,
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
