<template>
  <v-container
  >
    <v-row>
      <v-col>
        <v-card  color="#385F73" height="250" elevation="5">

            <v-btn @click="navigateTo({name:'login'})" block text height="100%"><span class="text-h2">Login</span></v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card  color="#3889 73" height="250" elevation="5">
        <v-btn block text height="100%"><span class="text-h2">Register</span></v-btn>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  components: {

  }
}
</script>
