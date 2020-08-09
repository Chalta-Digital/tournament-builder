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
import AuthService from '@/services/AuthService.js'
export default {
  name: 'Home',
  async created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/dashboard')
    }
    this.username = this.$store.getters.getUser.username
    this.secretMessage = await AuthService.getSecretContent()
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  components: {

  }
}
</script>
