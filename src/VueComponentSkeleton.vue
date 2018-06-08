<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      21 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</template>

<script> 

import Vue from 'vue'
import _ from 'lodash'

export default {
  name: 'vue-component-skeleton', 
  props: {},
  methods: {},
  data() {  
    return {
      msg: "Hello World"
    }
  },
  computed: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss"> 
  div {
    h1 {
      color: red;
    }
    p {
      font-style: italic;
    }
  }
</style>