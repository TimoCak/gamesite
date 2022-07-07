<template>
<div class="bestsellerGames">
    <div v-for="(game, index) in bestseller" :key="index" >
        <div class="bestsellerInfo" @click="moreInfo(game.title)" > 
            <div class="rank">{{index+1}}.</div>
            <div>{{game.title}}</div>
            <img class="bestsellerImage" width="150" :src="require(`../content/images/${game.img}`)">
            <div>{{game.price}}</div>
        </div>
    </div> 
</div>    
<detailed  v-if="selected" :game="game" @mouseQuit="lessInfo" @keyQuit="lessInfo"/>   
</template>


<script>
import Detailed from "@/components/Detailed.vue"
import bestSeller from '@/content/bestSeller'

export default {
    name: 'BestsellerVue',
    components: {Detailed},
    props: {
        bestseller: Array
    },
    data() {
        return {
            game: '',
            selected: false,
        }
    },
    created() {
        document.addEventListener('keyup',(e) => {
            if (e.code == 'Digit1') {
                this.moreInfo(bestSeller[0].title)
            }
            if (e.code == 'Digit2') {
                this.moreInfo(bestSeller[1].title)
            }
            if (e.code == 'Digit3') {
                this.moreInfo(bestSeller[2].title)
            }
        })
    },
    methods: {
        moreInfo(title) {

            this.selected = true;

            var bestsellerGames = document.getElementsByClassName("bestsellerGames")[0]
            bestsellerGames.style.opacity = "0.5";

            window.scrollTo({
                top: 1500,
                left: 0,
                behavior: 'smooth'
            });

            for (let i = 0; i < bestSeller.length;i++) {
                if (bestSeller[i].title == title) {
                    this.game = bestSeller[i];
                    break;
                }
            }
            if (this.selected == false) {
                this.selected = true;
            }
        },
        lessInfo() {
            var bestsellerGames = document.getElementsByClassName("bestsellerGames")[0]
            bestsellerGames.style.opacity = "1.0";

            this.selected = false;
            window.scrollTo({
                top: 1000,
                left: 0,
                behavior: 'smooth'
            });
        },
    }
}
</script>

<style scoped>
    .bestsellerGames {
        display: grid;
        grid-template-columns: 20% 20% 20%;
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
        margin-top: 50px;
        color: gold;
        margin-left: 15%;
        margin-right: 15%;
    }
    .rank {
        font-size: 5vh;

    }
    .bestsellerInfo {
        border: 1px;
        border-style: solid;
        border-radius: 20px;
    }
    .bestsellerInfo:hover {
        background-color: #4B0082;
        transition: 0.3s;
        transform: scale(1.1);
    }
    .bestsellerImage {
        border-radius: 20px;
    }
</style>