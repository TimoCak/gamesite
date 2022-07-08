<template>
    <div class="settings">
        <div> 
            <button class="btn btn-success" @click="toggleSetting">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </button>
        </div><br>
        <div v-if="showSettings"> 
            <!--time adjustable setting -->
            <div class="changeable">
            <div class="adjustSetting input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time</span>
            <input v-model="timeDuration" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <button @click="$emit('changeTime',timeDuration)" class="change btn btn-success">change</button>
            </div>
            <!--toggle time-->
            <div class="form-check">
                <input @click="$emit('onSlides')" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    Slideshow On
                </label>
            </div>
        <div  class="form-check">
            <input @click="$emit('offSlides')" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                Slideshow Off
            </label>
        </div>
        <!--end settings-->
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimeSettingsVue',
    props: {
        time: Number,
        timeOn: Boolean
    },
    data() {
        return {
            timeDuration: this.time,
            showSettings: false,
            slideToggle: this.timeOn,
        }
    }, 
    methods: {
        toggleSetting() {
            if (this.showSettings == false) {
                this.showSettings = true
            } else {
                this.showSettings = false
            }
        },
    }
}
</script>

<style scoped>
    .settings {
        margin-top: 50px;
        margin-right: 55%;
    }
    .form-check {
        width: 25%;
        margin-left: 45%;
    }
    .adjustSetting {
        width: 25%;
        margin-left: 45%;
    }
    .changeable {
        display: flex;
    }
    .change {
        height: 32px;
    }
</style>