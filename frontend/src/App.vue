<template>
  <v-app>
    <v-app-bar
      app
      color="cyan darken-4"
    >
        <v-toolbar-title class="headline text-uppercase">
          <span></span>
          <span class="site-name" @click="navigateTo({name:'home'})">
            Tournament Manager
          </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text @click="navigateTo({name:'home'})">
            Home
          </v-btn>
          <v-btn text @click="navigateTo({name:'about'})">
            About
          </v-btn>
        </v-toolbar-items>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>script
<style scoped>
.site-name{
  color: #80cbc4;
  text-decoration: none;
  cursor: pointer;
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
}
</style>
