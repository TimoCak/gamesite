<template>
  <HeaderVue />
  <router-view />
  <FooterVue />
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
  color: #2c3e50;
}
</style>
