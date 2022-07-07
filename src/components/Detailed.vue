<template>
    <div class="details"> 
        <h2>{{game.title}}</h2>
        <button class="btn btn-danger close" @click="$emit('mouseQuit')">X</button>
        <img class="bestsellerImage" width="350" :src="require(`../content/images/${game.img}`)">
        <div>{{game.description}}</div>
    </div>
</template>

<script>
    export default {
        name: "DetailedVue",
        props: {
            game: Object,
        },
        created() {
            document.addEventListener('keyup',(e) => {
                if (e.code == 'Escape') {
                    this.$emit('keyQuit')
                }
            })
        }
    }
</script>

<style scoped>
    .details {
        position: absolute;
        color: black;
        z-index: 99;
        background-color: white;
        height: 500px;
        width: 60%;
        border: 2px;
        border-style: solid;
        border-color: black;
        margin: auto;
        border-radius: 20px;
    }
    .close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
    }
</style>