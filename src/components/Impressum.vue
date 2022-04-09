<template>
  <div>
    <h1>{{company}}</h1>
    <button @click="counting">count is {{count}}</button>
    <button @click="count=0">reset</button>
  </div>
</template>

<script>
export default {
  name: 'ImpressumSite',
  data() {
    return  {
      company: "GAMERDUDES",
      count: 0
    }
  },
  methods: {
    counting() {
      this.count++;
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

</style>