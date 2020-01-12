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
      state.weatherData = null
    },
    changeWeather (state, data) {
      state.weatherData[data[1]] = data[0]
    },
    setLocalStorageData (state, StorageData) {
      console.log('StorageData', StorageData)
      state.weatherData = StorageData
    },
    deleteCity (state, index) {
      state.weatherData[index] = null
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
