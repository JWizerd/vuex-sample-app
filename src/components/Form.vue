<template>
  <section>
    <div v-if="errors" style="color: red; text-align: center;">
      {{errors}}
    </div>
    <div class="form">
      <h1>{{ msg }}</h1>
      <label name="name"></label>
      <input name="name" id="country" type="text" placeholder="Enter name..." />
      <button @click="click">ADD COUNTRY</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  },
  data: function() {
    return {
      errors: ''
    }
  },
  methods: {
    click: function(event) {
      const country = document.getElementById('country').value
      this.$store.dispatch('storeCountries', country)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
