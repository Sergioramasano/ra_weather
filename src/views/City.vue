<template>
  <div class="col s12 card-wrapper"
       :style="{ 'background-image': `url(${require('../assets/sky.jpeg')})`}"
       >
    <div class="card">
      <div class="card-image blue">
        <img :src="`http://openweathermap.org/img/wn/${weatherData[index].weather[0].icon}@2x.png`"
             alt="weatherIcon">
        <span class="card-title">{{weatherData[index].name}} | {{weatherData[index].sys.country}}</span>
      </div>
      <div class="card-content">
        <p>
          <span>Описание:</span>
          <b>{{weatherData[index].weather[0].description}}</b>
        </p>
        <p>
          <span>Температура:</span>
          <b>{{Math.ceil(weatherData[index].main.temp - 273)}}℃</b>
        </p>
        <p>
          <span>Ощущение:</span>
          <b>{{Math.ceil(weatherData[index].main.feels_like - 273)}}℃</b>
        </p>
        <p>
          <span>Минимальная t:</span>
          <b>{{Math.ceil(weatherData[index].main.temp_min-273)}}℃</b>
        </p>
        <p>
          <span>Максимальная t:</span>
          <b>{{Math.ceil(weatherData[index].main.temp_max-273)}}℃</b>
        </p>
        <p>
          <span>Скорость ветра:</span>
          <b>{{Math.ceil(weatherData[index].wind.speed)}}m/s</b>
        </p>
        <p>
          <span>Угол ветра:</span>
          <b>{{Math.ceil(weatherData[index].wind.deg)}}deg</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city',
  data: () => ({
    iconUrl: '',
    weatherData: []
  }),
  computed: {
    weather () {
      return this.$store.getters.getWeather
    },
    geoData () {
      return this.$store.getters.getGeoData
    },
    index () {
      return this.$store.getters.getCityIndex
    },
    isDetailsFromHome () {
      return this.$store.getters.isDetailsFromHome
    }
  },
  created () {
    if (this.isDetailsFromHome === true) {
      this.weatherData = this.geoData
    } else {
      this.weatherData = this.weather
    }
  }
}
</script>

<style scoped lang="scss">
  .card-wrapper{
    flex-grow: 1;
    color: black;
    overflov-y: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .card {
      text-align: left;

      .more {
        display: block;
        margin: auto;
        width: 150px;
      }

      .reload {
        text-align: center;
        font-size: 22px;

        &:hover {
          transform: rotate(720deg);
          transition: .5s ease-in;
        }
      }

      &-title {
        padding: 7px 24px!important;
        color: #5f6368;
      }

      &-content {
        p {
          width: 300px;
          display: flex;
          justify-content: space-between;
        }
      }

      &-image {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 90px;
          height: 90px;
        }
      }
    }
  }
</style>
