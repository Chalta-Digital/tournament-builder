<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
        color="cyan lighten-5"
        :elevation="hover ? 24 : 6"

    >
        <v-card-title>Please Login with your cridentials</v-card-title>
        <v-text-field label="Username" rounded="true"></v-text-field>
        <v-text-field label="Password" rounded="true"></v-text-field>
        <v-card-actions>
        <v-btn text><router-link to="/dashboard">Login</router-link></v-btn>
        <v-btn text>Sign Up</v-btn>
        </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({

  })
}
</script>
