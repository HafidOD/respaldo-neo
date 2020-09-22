import Vue from 'vue'
import Vuex from 'vuex'

import  createPersistedState  from  'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    Authenticated: false,
    User: ''
  },
  mutations: {
    setAuthTrue (state, user) {
      state.Authenticated = true
      state.User = user
    },
    setAuthFalse (state) {
      state.Authenticated = false
      state.User = ''
    }
  },
  actions: {
  },
  modules: {
  },
  /* persistir estado de la intancia vuex*/
  plugins: [createPersistedState()]
})
