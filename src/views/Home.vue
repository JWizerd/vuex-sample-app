<template>
  <div class="home">
    <Countries />
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'
import Countries from '@/components/Countries.vue'

export default {
  name: 'home',
  components: {
    Form, Countries
  }
}
</script>
