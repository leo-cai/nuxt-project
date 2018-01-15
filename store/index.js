import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import project from './modules/project'
import index from './modules/index'

Vue.use(Vuex)

const state = {}

const vuexStore = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    modules: {
      project,
      index
    }
  })
}

export default vuexStore
