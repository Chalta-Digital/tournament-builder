<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col sm="2"></v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <v-card
        class="mx-auto"
        min-width="40%"
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
export default {
  name: 'Login',

  data: () => ({

  })
}
</script>
