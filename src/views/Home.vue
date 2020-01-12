<template>
  <section
    class="home container-fluid"
    :style="{ 'background-image': `url(${require('../assets/sky.jpeg')})`}"
  >
    <template v-if="!detalization">
    <addCity @addCity="addCity"/>
    <div class="row p-2 cards">
      <card
        v-for="(item, i) of weatherData"
        :key="item.name"
        @openDetails="openDetails"
        @reload="reloadCityWeather"
        :index="i"
        :weatherData="weatherData"
      />
    </div>
    </template>
    <div
      v-else
      class="row p-2"
    >
      <detail :cityName="cityName" />
    </div>
  </section>
</template>

<script>
import card from '@/components/card.vue'
import detail from '@/components/detail.vue'
import addCity from '@/components/addCity.vue'

export default {
  name: 'home',
  components: {
    card, detail, addCity
  },
  data: () => ({
    cityName: '',
    lat: '',
    lon: ''
  }),
  computed: {
    weatherData () {
      return this.$store.state.weatherData
    },
    detalization () {
      return this.$store.getters.getIsOpenDetails
    }
  },
  methods: {
    getWeatherByCityName () {
      this.axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
        .then(response => {
          this.$store.commit('setWeather', response.data)
          localStorage.clear()
          localStorage.setItem('array', JSON.stringify(this.weatherData))
        })
    },
    reloadWeatherByCityName (i) {
      this.axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
        .then(response => {
          this.$store.commit('changeWeather', [response.data, i])
        })
    },
    getWeatherByGeo () {
      this.axios
        .get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
        .then(response => {
          this.$store.commit('setWeather', response.data)
        })
    },
    openDetails (name) {
      this.cityName = name
    },
    setLocation (position) {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
      this.getWeatherByGeo()
    },
    getUserLocation () {
      navigator.geolocation.watchPosition(this.setLocation)
    },
    reloadCityWeather (data) {
      this.cityName = data[0]
      this.reloadWeatherByCityName(data[1])
    },
    addCity (city) {
      this.cityName = city
      this.getWeatherByCityName()
    }
  },
  created () {
    if (localStorage.getItem('array')) {
      this.$store.commit('setLocalStorageData', JSON.parse(localStorage.getItem('array')))
    } else {
      this.getUserLocation()
    }
    localStorage.clear()
  },
  beforeDestroy () {
    localStorage.setItem('array', JSON.stringify(this.weatherData))
  }
}
</script>
<style scoped lang="scss">
  .home {
    flex-grow: 1;
    color: black;
    overflov-y: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .cards{
      height: 500px;
      padding-bottom: 100px;
      overflow-y: auto;
    }
  }
</style>
