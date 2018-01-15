import Vue from 'vue'
import config from '../config'

export default {
  getProjects (limit, page) {
    let apiUrl = `${config.API_HOST}/projects?limit=${limit}&page=${page}`
    console.log(apiUrl)
    let promise = Vue.http.get(apiUrl)
    return promise
  }
}
