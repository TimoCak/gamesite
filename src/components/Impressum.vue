<template>
  <div>
    <h2>Impressum</h2>
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

</style>