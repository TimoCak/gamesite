<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">𝔾𝕒𝕞𝕖𝕛𝕦𝕟𝕜𝕚𝕖.𝕔𝕠𝕞</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item nav-link">
            <router-link to="/store">Store</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/communityhub">Community</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/news">News</router-link>
          </li>
         </ul>
          <ul style="right 100%; display: flex; list-style-type: none;">
           <li style="margin-right: 2em;">
              <router-link to="/login">login
              <i class="bi bi-box-arrow-left"></i></router-link>
          </li>
          <li>
              <router-link to="/signup">signup 
              <i class="bi bi-person-plus-fill"></i></router-link>
          </li>
          </ul>  
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      searcher: ""
    }
  },
  methods: {
    search() {
      this.$router.push("/Impressum");
    } 
  }
}
</script>

<style scoped>

a {
  color: red;
  text-decoration: none;
}
 a:hover {
  color: azure;
  
}
.navbar-custom {
  background-color: #4B0082;
}
</style>