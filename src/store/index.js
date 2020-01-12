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
    },
    emitDeleteWeatherData (state) {
      state.weatherData = []
    },
    changeWeather (state, data) {
      state.weatherData[data[1]] = data[0]
    },
    setLocalStorageData (state, StorageData) {
      state.weatherData = StorageData
    },
    deleteCity (state, index) {
      state.weatherData.splice(state.weatherData[index], 1)
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
