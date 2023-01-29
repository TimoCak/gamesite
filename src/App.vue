<template>
  <div id="page">
  <HeaderVue />
  <router-view />
  <FooterVue />
</div>
</template>

<script>

import HeaderVue from "@/components/Header";
import FooterVue from "@/components/Footer";

export default {
  name: 'App',
  components: {
    //HelloWorld
    HeaderVue,
    FooterVue

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
  background-color: black;
  margin: auto;
  background-color: black;
  min-height: 200vh;
  overflow-y: scroll;
}

#page {
  max-width: 1600px;
  margin: 0 auto 0 auto;
}
</style>
