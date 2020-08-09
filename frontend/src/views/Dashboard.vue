<template>
   <v-card
    class="mt-4 mx-auto"
    max-width="800"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">User Dashboard</div>
      <div class="subheading font-weight-light grey--text">
        <h1>Hej! {{ username }}</h1>
        <p>you are logged in as {{ userRole }}</p>
      </div>
      <v-divider class="my-2"></v-divider>
      <v-btn text @click="logout">Logout</v-btn>

    </v-card-text>
  </v-card>
</template>

<script>
import AuthService from '@/services/AuthService.js'
export default {
  name: 'Dashboard',
  data() {
    return {
      secretMessage: '',
      username: '',
      userRole: ''
    }
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }
    this.btnStatus = true
    this.username = this.$store.getters.getUser.username
    this.userRole = this.$store.getters.getUser.user_role
    this.secretMessage = await AuthService.getSecretContent()
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
