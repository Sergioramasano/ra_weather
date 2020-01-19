import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: [],
    geoData: [],
    cityName: '',
    index: 0,
    isStateReady: false,
    isDetailsFromHome: false
  },
  mutations: {
    SET_CITY_NAME (state, data) {
      state.cityName = data
    },
    SET_FROM_HOME (state, bool) {
      state.isDetailsFromHome = bool
    },
    SET_WEATHER (state, data) {
      state.weatherData.push(data)
    },
    SET_GEO_DATA (state, data) {
      state.geoData[0] = data
      state.isStateReady = true
    },
    SET_INDEX (state, index) {
      state.index = index
    },
    EMIT_DELETE_WEATHER_DATA (state) {
      state.weatherData = []
    },
    CHANGE_WEATHER (state, data) {
      state.weatherData[data[1]] = data[0]
    },
    SET_LOCAL_STORAGE_DATA (state, StorageData) {
      state.weatherData = StorageData
    },
    DELETE_CITY (state, index) {
      state.weatherData.splice([index], 1)
    }
  },
  actions: {
    async reloadWeatherByCityName ({ commit }, city) {
      let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
      commit('SET_GEO_DATA', res.data)
    },
    async getWeatherByGeo ({ commit }, { lat, lon }) {
      try {
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
        commit('SET_GEO_DATA', res.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getWeatherByCityName ({ commit }, query) {
      try {
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
        commit('SET_WEATHER', res.data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters:
{
  getWeather (state) {
    return state.weatherData
  },
  getGeoData (state) {
    return state.geoData
  },
  getCityName (state) {
    return state.cityName
  },
  getCityIndex (state) {
    return state.index
  },
  isStateReady (state) {
    return state.isStateReady
  },
  isDetailsFromHome (state) {
    return state.isDetailsFromHome
  }
},
  modules: {
  }
})
