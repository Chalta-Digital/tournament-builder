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

          <v-text-field label="Username" rounded></v-text-field>
          <v-text-field type="password" label="Password" rounded></v-text-field>
          <v-card-actions>
          <v-btn text><router-link to="/dashboard">Login</router-link></v-btn>
          <v-btn text>Sign Up</v-btn>
          </v-card-actions>
        </v-form>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Login from '@/components/Login'

export default {
  name: 'Login',

  components: {
    // Login
  }
}
</script>
