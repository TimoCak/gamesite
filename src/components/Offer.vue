<template>
    <div class="slidesOffer"> 
        <div class="slideOffer" v-for="(game,index) in games" :key="index"> 
            <h4>{{game.title}}</h4>
            <img class="offerImg" :width="game.width" :src="require(`../content/images/${game.img}`)">
            <div class="priceDiscount"> 
                <div class="discount">{{game.discount}}</div>
                <div class="oldPrice">{{game.oldPrice}}</div>   
            </div>
            <button class="btn btn-warning"><div class="priceOffer">BUY FOR {{game.price}}</div></button> 
        </div>
    </div>
</template>


<script>
    import offers from '@/content/offers'

    export default {
        name: 'OfferVue',
        props: {
            time: Number,
            timeOn: Boolean,
        },
        data() {
            return {
                currentSlide: 0,
                games: offers,
            }
        },
        mounted() {
            this.initailSlides();
            
        },
        created() {
            this.slideShow(this.time);
        },
        methods: {
            initailSlides() {
                var slides = document.getElementsByClassName('slideOffer')
                for (let i = 0; i < slides.length;i++) {
                    if (this.currentSlide == i) {
                        slides[i].style.display = "block"
                    } else {
                        slides[i].style.display = "none"
                    }
                }
            },
            slideShow(t) {

                if (this.timeOn) {
                    var slides = document.getElementsByClassName('slideOffer')
                    this.currentSlide = this.currentSlide + 1;

                    if (this.currentSlide == slides.length) {
                        this.currentSlide = 0;
                    }
                    
                    this.initailSlides()

                    
                }
                setTimeout(() => {
                    this.slideShow(this.time);
                },t)

            },
        }
    }
</script>


<style scoped>
    .oldPrice {
        text-decoration: line-through;
        color: red;
    }
    .slidesOffer {
        
        background-color: #4B0082;
        border-radius: 20px;
        width: 60%;
        margin: auto;
        padding: 1.5%;
    }
    .slidesOffer:hover {
        transition: 0.3s;
        transform: scale(1.1);
    }
    .slidesOffer {
        margin-top: 10px;
    }
    .offerImg {
        border-radius: 20px;
    }
    .priceDiscount {
        display: flex;
        margin-left: 45%;
        margin-bottom: 1%;
        column-gap: 5px;
    }
    .discount {
        background-color: green;
    }
    .priceOffer {
        
    }
</style>
