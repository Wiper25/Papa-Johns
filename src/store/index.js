import Vue from 'vue'
import Vuex from 'vuex'
import navFixed from '../store/nav-fixed.js'
import cards from '../store/cards.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
  },
  mutations: {
  },
  state: {
  },
  getters: {
  },
  modules: {
    navFixed,
    cards,
  }
})
