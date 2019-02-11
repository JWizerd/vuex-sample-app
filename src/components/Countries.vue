<template>
  <div class="home">
    <ul>
      <li class="country" v-for="(country, index) in countries">
        <Card v-bind:country="country" v-bind:index="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'countries',
  components: {Card},
  computed: {
    countries: function() {
      return this.$store.getters.countries
    }
  }
}
</script>
