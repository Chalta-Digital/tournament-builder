<template>
  <v-app>
    <v-app-bar
      app
      color="cyan darken-4"
    >
        <v-toolbar-title class="headline text-uppercase">
          <span></span>
          <span class="">
            <router-link to="/" class="site-name">Tournament Manager</router-link>
          </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <router-link class="top-menu-item" to="/">Home</router-link>
          </v-btn>
          <v-btn text>
            <router-link class="top-menu-item" to="/about">About</router-link>
          </v-btn>
          <v-btn text>
            <router-link class="top-menu-item" to="/login">Login</router-link>
          </v-btn>
        </v-toolbar-items>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style scoped>
/* .site-name{
  color: #80cbc4;
  text-decoration: none;
}
.site-name:hover{
  color: aliceblue;
  text-decoration: none;
}
.top-menu-item{
  color: #b2dfdb;
  text-decoration: none;
}
.top-menu-item:hover{
  color: #00bfa5;
} */
</style>
