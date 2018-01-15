
// init state
const state = {
  requestErrors: ''
}

// getters
const getters = {
  requestErrors: state => state.requestErrors
}

// actions
const actions = {
  //
}

// mutations
const mutations = {
  pushError (state, requestErrors) {
    state.requestErrors = requestErrors
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
