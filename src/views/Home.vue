<template>
  <section
    class="home container-fluid"
    :style="{ 'background-image': `url(${require('../assets/sky.jpeg')})`}"
  >
    <div class="row p-2">
      <card
        v-if="!detalization"
        @reload="reloadCityWeather"
        @emitOpenDetails="openDetails"
        :cities="cities"
      />
      <detail :cityName="cityName" v-else/>
    </div>
  </section>
</template>

<script>
import card from '@/components/card.vue'
import detail from '@/components/detail.vue'

export default {
  name: 'home',
  components: { card, detail },
  data: () => ({
    cities: [],
    cityName: 'Cherkasy',
    detalization: false
  }),
  methods: {
    getCities () {
      this.axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=89131358011ec8066582be44f133475a&lang=ua`)
        .then(response => {
          this.cities.push(response.data)
        })
    },
    openDetails (name) {
      this.cityName = name
      this.detalization = true
    },
    getUserLocation () {

    },
    reloadCityWeather (name) {
      this.cityName = name
      this.getCities()
    }
  },
  created () {
    this.getCities()
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
  }
</style>
