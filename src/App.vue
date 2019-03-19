<template>
  <div >
    <Navbar v-bind:name="name"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import  Navbar from './components/navBar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  },
  data:
    function () {
      return {
      name:"Lakshya"
      }
    }
  
}
</script>

<style>
</style>
