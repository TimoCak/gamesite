<template>
 <div>
   <h1>{{title}}</h1>
   <router-link to="/Impressum">Impressum</router-link>
   <router-link to="/">Home</router-link>
 </div>
</template>

<script>
export default {
  name: "HomeSite",
  data() {
    return {
      title: "Home",


    }
  }
}
</script>

<style scoped>

</style>