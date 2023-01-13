<template>
<div>
  <AppNavBar  />
 <router-view></router-view>
</div>
</template>

<script>
 import AppNavBar from "./components/AppNavBar.vue" ;
export default {
  name: 'App',
  components: {
   AppNavBar
  }
}
</script>

<style>

</style>
