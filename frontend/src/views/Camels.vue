<template>
  <div class="camels">
    <h1>List of {{ camels.length }} camels</h1>
    <b-button type="button" class="createButton" @click="createCamel()">Create Camel</b-button>
    <b-list-group>
      <camel-item v-for="camel in camels" :key="camel._id" :camel="camel" @delete-camel="deleteCamel"></camel-item>
    </b-list-group>
  </div>
</template>

<script>
import { Api } from '@/Api'
import CamelItem from '@/components/CamelItem'

export default {
  name: 'Camels',
  data() {
    return {
      camels: []
    }
  },
  mounted() {
    this.getCamels()
  },
  methods: {
    getCamels() {
      Api.get('camels')
        .then(reponse => {
          this.camels = reponse.data.camels
        })
        .catch(error => {
          this.camels = []
          console.log(error)
        })
        .then(() => {
          // This code is always executed (after success or error).
        })
    },
    deleteCamel(id) {
      Api.delete(`/camels/${id}`)
        .then(response => {
          console.log(response.data.message)
          var index = this.camels.findIndex(camel => camel._id === id)
          this.camels.splice(index, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    createCamel() {
      var randomCamel = {
        color: this.getRandomColor(),
        position: this.getRandomInt(10)
      }
      Api.post('/camels', randomCamel)
        .then(response => {
          this.camels.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max)
    },
    getRandomColor() {
      var colors = ['orange', 'green', 'red', 'blue']
      var index = this.getRandomInt(colors.length)
      return colors[index]
    }
  },
  components: {
    CamelItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.createButton {
  margin-bottom: 1em;
}
.camels {
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2em;
}
</style>
