<template>
  <v-app>
    <v-app-bar
      app
      red accent-4
    >
        <v-toolbar-title class="headline text-uppercase">
          <span></span>
          <span class="font-weight-light">Tournament Manager</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/about">About</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/login">Login</router-link>
          </v-btn>
        </v-toolbar-items>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
