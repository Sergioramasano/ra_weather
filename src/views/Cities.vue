<template>
  <div>
    <addCity @addCity="addCity"/>
    <div class="row p-2 pt-0 cards">
      <card
        v-for="(item, i) of weatherData"
        :key="item.name"
        @openDetails="openDetails(item, i)"
        @reload="reloadCityWeather"
        :index="+i"
        :weatherData="weatherData"
      />
    </div>
</div>
</template>

<script>
import card from '@/components/card.vue'
import addCity from '@/components/addCity.vue'

export default {
  name: 'cities',
  components: {
    card, addCity
  },
  data: () => ({
    lat: '',
    lon: ''
  }),
  computed: {
    cityName () {
      return this.$store.getters.getCityName
    },
    weatherData () {
      return this.$store.getters.getWeather
    },
    readyState () {
      return this.$store.getters.isStateReady
    }
  },
  methods: {
    openDetails (city, i) {
      this.$store.commit('SET_INDEX', i)
      this.$store.commit('SET_FROM_HOME', false)
      let a = city.id
      let b = city.name
      this.$router.push({ path: `/cities/${a}`, query: { cityName: b } })
    },
    addCity (city) {
      this.$store.dispatch('getWeatherByCityName', city)
      localStorage.setItem('array', JSON.stringify(this.weatherData))
    },
    reloadCityWeather (data) {
      this.$store.commit('SET_CITY_NAME', data[0])
      this.$store.dispatch('reloadWeatherByCityName', data[0])
    }
  },
  created () {
    if (localStorage.getItem('array')) {
      this.$store.commit('SET_LOCAL_STORAGE_DATA', JSON.parse(localStorage.getItem('array')))
    }
  },
  beforeDestroy () {
    localStorage.setItem('array', JSON.stringify(this.weatherData))
  }
}
</script>
<style scoped lang="scss">
  .cards {
    height: 500px;
    padding-bottom: 100px;
    overflow-y: auto;
  }
</style>
