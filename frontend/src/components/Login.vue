<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
    >
        <v-card-title>Please Login with your cridentials</v-card-title>
        <v-input
          :messages="['Messages']"
          append-icon="close"
          prepend-icon="phone"
        >
        </v-input>

        <v-card-actions>
        <v-btn text>Login</v-btn>
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
