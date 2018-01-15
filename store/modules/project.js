import api from '../apis/project'

// init state
const state = {
  projects: []
}

// getters
const getters = {
  projects: state => state.projects
}

// actions
const actions = {
  getProjects ({commit, state}, params) {
    let promise = api.getProjects(params.limit, params.page)
    promise.then((response) => {
      console.log(response.data)
      commit('setProjects', response.data.projects)
    }).catch((error) => {
      console.log(error)
      commit('setProjects', [])
      commit('pushError', '请求错误，请稍后再试～！')
    })
  }
}

// mutations
const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  }
  // pushError (state, errors) {
  //   state.errors = errors
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
