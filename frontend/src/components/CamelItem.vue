<template>
  <b-list-group-item :style="{ color: camel.color }">
    <img alt="Camel" src="../assets/camel.jpg">
    {{ camel.color }} is at position {{ camel.position }}
    <b-button type="button" class="close" @click="$emit('delete-camel', camel._id)">&times;</b-button>
  </b-list-group-item>
</template>

<script>

export default {
  name: 'camel-item',
  props: ['camel']
}
</script>

<style scoped>
img {
  width: 33px;
  margin-right: 10px;
}
</style>
