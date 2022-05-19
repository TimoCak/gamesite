<template>
  <h1>Willkomen!</h1>
  <ul class="itemContainer">    
     <li class="slides" v-for="(game,index) in games" :key="index"> 
        <h4>{{game.title}}</h4>
        <div class="arrowContainer">  
        <button class="display-left" @click="changeSlide(-1)">&#10094;</button>
        <Transition name="bounce">
        <img @load="showInitial"  v-if="emptyImage(game.img) && show" :src="require(`../content/images/${game.img}`)" :width="game.width" :height="game.height" /> 
        </Transition>
        <button class="display-right" @click="changeSlide(1)">&#10095;</button> 
        </div>
        <div>{{game.description}}</div>
        <router-link to="/rating"><button class="btn btn-success">RATE YOUR GAME</button></router-link>
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
     initialSlide: 0,
     show: true,

    }
  },
  computed: {
   
  },
  methods: {
    emptyImage(url) {
      return url === null ? false : true
    },
    showInitial() {
        var slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            if (this.initialSlide < 0) {
              this.initialSlide = 0;
            } else if (this.initialSlide > slides.length-1) {
               this.initialSlide = slides.length-1; 
            }
            else if (i == this.initialSlide) {
                slides[i].style.display = "block";
            }
            else {
              slides[i].style.display = "none";
            }
    
        }
    },
    changeSlide(arrow) {
      this.show = false;
      if (arrow==-1) {
        this.initialSlide--;
      } else if (arrow==1) {
        this.initialSlide++;
      } else {
        console.error("Either -1 or 1 as input is required!");
      }
      this.show = true;
      this.showInitial();
    }
    
  },
}




</script>

<style scoped>
  .itemContainer {
    width: 60%;
    background-color: rgb(133, 89, 131);
    margin: auto;
    margin-top: 10%;
    list-style: none;
  }
  .arrowContainer {
    display:  -ms-grid

  }
  .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>