<template>
  <div>
    <h1>{{company}}</h1>
    <h2>{{dances}}</h2>
    <button id="count" type="button" class="btn btn-dark" @click="counting">count is {{count}}</button>
    <button id="reset" type="button" class="btn btn-dark" @click="count=0">reset</button>
  </div>
</template>

<script>
export default {
  name: 'ImpressumSite',
  data() {
    return  {
      company: "GAMING SITE",
      count: 0,
      dance: 'false'
    }
  },
  methods: {
    counting() {
      this.count++;
    }
  },
    computed: {
      dances() {
        return this.count === 7 ? 'YES' : 'NO';
      }
    }

}
</script>

<style scoped>
  h1 {
    color: red;
    background-color: #2c3e50;
    width: 50%;
    margin: auto;
  }

  #count {
    margin: 20px;
  }

</style>