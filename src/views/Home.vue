<template>
  <section
    class="home container-fluid"
    :style="{ 'background-image': `url(${require('../assets/sky.jpeg')})`}"
  >
    <template v-if="!detalization">
    <addCity/>
    <div class="row p-2">
      <card
        @openDetails="openDetails"
        @reload="reloadCityWeather"
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
    reloadCityWeather (name) {
      this.cityName = name
      this.getWeatherByCityName()
    }
  },
  created () {
    this.getUserLocation()
    // this.getWeatherByCityName()
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

    #last_name {
      color: white;
    }
  }
</style>
