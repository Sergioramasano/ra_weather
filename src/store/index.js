import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: [],
    isOpenDetails: false
  },
  mutations: {
    setWeather (state, data) {
      state.weatherData.push(data)
    },
    emitOpenDetails (state) {
      state.isOpenDetails = true
    },
    emitCloseDetails (state) {
      state.isOpenDetails = false
    }
  },
  actions: {
  },
  getters: {
    getWeather (state) {
      return state.weatherData
    },
    getIsOpenDetails (state) {
      return state.isOpenDetails
    }
  },
  modules: {
  }
})
