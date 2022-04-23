<template>
  <div id="app">
    <TheMessage />
  </div>
</template>

<script>
import TheMessage from "@/components/TheMessage.vue";
export default {
  name: "App",
  components: { TheMessage },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}

body{
  background-color: rgb(222, 222, 222);
  padding: 20px;
}

</style>
