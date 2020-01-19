<template>
  <div>
    <template v-if="isStateReady">
      <router-link
        to="cities"
        class="btn waves-effect waves-light mt-2"
      >
        more cities
      </router-link>
      <div
        class="row p-2 cards"
      >
          <card
            v-for="(item, i) of weatherData"
            :key="item.id"
            @openDetails="openDetails(item, i)"
            @reload="reloadCityWeather"
            :index="+i"
            :unclose="true"
            :weatherData="weatherData"
          />
      </div>
    </template>
    <loader v-if="!isStateReady"/>
  </div>
</template>

<script>
import card from '@/components/card.vue'
import loader from '@/components/loader.vue'

export default {
  name: 'home',
  components: {
    card,
    loader
  },
  data: () => ({
    lat: '',
    lon: '',
    flag: false
  }),
  computed: {
    cityName () {
      return this.$store.getters.getCityName
    },
    weatherData () {
      return this.$store.getters.getGeoData
    },
    isStateReady () {
      return this.$store.getters.isStateReady
    }
  },
  methods: {
    openDetails (city, i) {
      this.$store.commit('SET_INDEX', i)
      this.$store.commit('SET_FROM_HOME', true)
      let a = city.id
      let b = city.name
      this.$router.push({ path: `/cities/${a}`, query: { cityName: b } })
    },
    setLocation (position) {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      this.$store.dispatch('getWeatherByGeo', { lat, lon })
    },
    getUserLocation () {
      navigator.geolocation.getCurrentPosition(this.setLocation)
    },
    reloadCityWeather (data) {
      this.$store.commit('SET_CITY_NAME', data[0])
      this.$store.dispatch('reloadWeatherByCityName', data[0])
    }
  },
  created () {
    this.getUserLocation()
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

    .cards {
      height: 500px;
      padding-bottom: 100px;
      overflow-y: auto;
    }
  }
</style>
