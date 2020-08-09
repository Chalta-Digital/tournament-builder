<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="9" offset="3"
      >
        <v-card
        max-width="60%"
        outlined
        color="cyan lighten-5"
        :elevation="10"
        >
        <v-form>
          <v-card-title>Please Login with your cridentials</v-card-title>

          <v-text-field prepend-icon="mdi-account" v-model="username" rounded></v-text-field>
          <v-text-field type="password" v-model="password" rounded></v-text-field>
          <p v-if="msg">{{ msg }}</p>
          <v-card-actions>
          <v-btn text @click="login">Login</v-btn>
          <v-btn text>Sign Up</v-btn>
          </v-card-actions>
        </v-form>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import AuthService from '@/services/AuthService.js'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        }
        const response = await AuthService.login(credentials)
        this.msg = response.msg
        const token = response.token
        const user = response.user
        // console.log(credentials)
        this.$store.dispatch('login', { token, user })
        this.$router.push('dashboard')
      } catch (error) {
        this.msg = error.response.data.msg
      }
    }
  }
}
</script>
