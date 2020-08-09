// src/services/AuthService.js

import axios from 'axios'

const url = 'http://localhost:3000/api/'

export default {
  login(credentials) {
    return axios
      .post(url + 'user/login', credentials)
      .then(response => response.data)
  },
  // signUp(credentials) {
  //   return axios
  //     .post(url + 'sign-up/', credentials)
  //     .then(response => response.data)
  // },
  getSecretContent() {
    return axios.get(url + 'user/dashboard').then(response => response.data)
  }
}
