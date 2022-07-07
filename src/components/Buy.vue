<template>
    <h2>{{game.title}}</h2>
    <img :width="`${game.width}`" :src="require(`../content/images/${game.img}`)">
    <div>{{game.description}}</div>
    <p>{{game.price}}</p>
</template>


<script>
import games from "@/content/games.js"

export default {
    name: 'BuyVue',
    prop: {
        games: games,
        game: ''
    },
    data() {
        return {
            games: games,
        }
    },
    created() {    
        for (let i = 0; i < this.games.length; i++) {
            if(this.games[i].title == this.$route.params.title) {
                this.game = this.games[i]
                break;
            }
        }
        console.log(this.game)
    }
}
</script>
