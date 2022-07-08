<template>
  <h1 class="headline">𝔾𝕒𝕞𝕖𝕛𝕦𝕟𝕜𝕚𝕖.𝕔𝕠𝕞</h1>
  <img class="banner" src="../content/images/CyberpunkHome.jpg">
  <h3>Neuheiten</h3>
  <ul class="itemContainer">
    <div class="arrow-container">
      <button class="display-left" @click="changeSlide(-1)">&#10094;</button> 
     <li class="slides" v-for="(game,index) in games" :key="index"> 
        <div class="flexi">
        <img class="gamePicture" @load="showInitial" v-if="emptyImage(game.img)" :src="require(`../content/images/${game.img}`)" :width="game.width" :height="game.height" />
        <div class="gameInfo">
        <h4>{{game.title}}</h4>  
        <div>{{game.description}}</div>
        
        <router-link :to="`/buy/${game.title}`"><button class="btn btn-warning">BUY for <p>{{game.price}}</p></button></router-link>
        </div>
        </div>
      </li>
      <button class="display-right" @click="changeSlide(1)">&#10095;</button>   
      </div>    
    </ul>
   <h3>Bestseller</h3>
      <bestseller :bestseller="bestsellerGames" />
   <h3>Angebote</h3>
      <time-setting :time="adjustTime" :timeOn="timeOn"
      @changeTime="(value) => adjustTime=value" 
      @offSlides="() => timeOn = false"  @onSlides="() => timeOn = true"/>
      <offer :time="adjustTime" :timeOn="timeOn"/>
</template>

<script>
import games from "@/content/games.js"
import bestseller from "@/components/Bestseller.vue"
import offer from "@/components/Offer.vue"
import bestsellerGames from "@/content/bestSeller"
import timeSetting from "@/components/TimeSetting.vue"

export default {
  name: "HomeSite",
  components: {bestseller,offer, timeSetting},
  data() {
    return {
     games: games,
     initialSlide: 0,
     bestsellerGames: bestsellerGames,
     adjustTime: 5000,
     timeOn: true,
    }
  },
  created() {
    document.addEventListener('keyup', (e) => {
      if (e.code == "ArrowLeft") {
        this.changeSlide(-1)
      }
      else if (e.code == "ArrowRight") {
        this.changeSlide(1)
      }
    }) 
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

      var slides = document.getElementsByClassName("slides");

      if (arrow==-1 && this.initialSlide==0) {
        this.initialSlide = slides.length-1
      } else if (arrow==1 && this.initialSlide==slides.length-1) {
        this.initialSlide = 0;
      }
      else if (arrow==-1) {  
        this.initialSlide--;    
      } else if (arrow==1) {
        this.initialSlide++;
      } 
      else {
        console.error("Either -1 or 1 as input is required!");
      }

      
      this.showInitial();
    }
    
  },
}




</script>

<style scoped>
  .itemContainer {
    width: 100%;
    margin: auto;
    list-style: none;
    display: grid;
    margin-top: 50px;
  }

  .arrow-container {
    display: flex;
  }

  .display-left, .display-right {
    height: 40px;
    width: 40px;
    margin-top: 10%;
  }
  .display-left {
    margin-left: 12.5%;
  }
  .display-right {
    margin-right: 12.5%;
  }
  .slides {
    padding: 10px;
    border: 1px;
    border-style: solid;
    border-radius: 20px;
    width: 60%;
    margin-bottom: 10px;
    margin: auto;
  }
  h3 {
    width: 1200px;
    text-align: left;
    margin-left: 12.5%;
    margin-top: 75px;
    border-bottom: 2px solid white;
  }
  
  .headline {
    position: absolute;
    margin-left: 25%;
  }
  .banner {
    width: 1200px;
    height: 600px;
  }
  .gamePicture {
    border-radius: 20px;
  }
  .flexi {
    display: flex;
  }
  .gameInfo {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: #4B0082;
    border-radius: 20px;
    padding: 5px;
    width: 30%;
  }

</style>