<template>
 <div>
   <router-link to="/rating"><button class="btn btn-success">RATE YOUR GAME</button></router-link>
  </div>
  <div class="itemContainer">
    <img src="/src/assets/logo.png" :width="width" :height="height">
  </div>
</template>

<script>
const resi7 = require("../../content/games").resi7

export default {
  name: "HomeSite",
  data() {
    return {
      src: resi7.img,
      width: resi7.width,
      height: resi7.height

    }
  }
}
</script>

<style scoped>
  .itemContainer {
    width: 80%;
    background-color: rgb(133, 89, 131);
    margin: auto;
  }

</style>