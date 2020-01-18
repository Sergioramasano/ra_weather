<template>
  <div>
      <template v-if="readyState">
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
            @openDetails="openDetails(item)"
            @reload="reloadCityWeather"
            :index="+i"
            :weatherData="weatherData"
          />
        </div>
      </template>
    <loader v-if="!readyState"/>
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
    detalization () {
      return this.$store.getters.getIsOpenDetails
    },
    cityName () {
      return this.$store.getters.getCityName
    },
    weatherData () {
      return this.$store.getters.getGeoData
    },
    readyState () {
      return this.$store.getters.isStateReady
    }
  },
  methods: {
    openDetails (city) {
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
      console.log(data)
      this.$store.commit('SET_CITY_NAME', data[0])
      this.$store.dispatch('reloadWeatherByCityName', data[0])
    }
  },
  mounted () {
    setTimeout(() => {
      this.getUserLocation()
    }, 3000)
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
