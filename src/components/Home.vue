<template>
 <div>
   <router-link to="/rating"><button class="btn btn-success">RATE YOUR GAME</button></router-link>
  </div>
  <ul class="itemContainer">
     <li v-for="(game,index) in games" :key="index"> 
        <h4>{{game.title}}</h4>  
        <img v-if="emptyImage(game.img)" :src="require(`../content/images/${game.img}`)" :width="game.width" :height="game.height" />
        <div>{{game.description}}</div>
      </li>
    </ul>
</template>

<script>
import games from "@/content/games.js"


export default {
  name: "HomeSite",
  data() {
    return {
     games: games,

    }
  },
  methods: {
    emptyImage(url) {
      return url === null ? false : true
    }
  }
}
</script>

<style scoped>
  .itemContainer {
    width: 80%;
    background-color: rgb(133, 89, 131);
    margin: auto;
    list-style: none;
  }

</style>