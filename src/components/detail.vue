<template>
  <div class="col s12">
    <div class="card">
      <div class="card-image blue">
        <img :src="`http://openweathermap.org/img/wn/${this.weatherData[0].weather[0].icon}@2x.png`" alt="weatherIcon">
        <span class="card-title">{{weatherData[0].name}} | {{weatherData[0].sys.country}}</span>
      </div>
      <div class="card-content">
        <p>
          <span>Описание:</span>
          <b>{{weatherData[0].weather[0].description}}</b>
        </p>
        <p>
          <span>Температура:</span>
          <b>{{Math.ceil(weatherData[0].main.temp - 273)}}℃</b>
        </p>
        <p>
          <span>Ощущение:</span>
          <b>{{Math.ceil(weatherData[0].main.feels_like - 273)}}℃</b>
        </p>
        <p>
          <span>Минимальная t:</span>
          <b>{{Math.ceil(weatherData[0].main.temp_min-273)}}℃</b>
        </p>
        <p>
          <span>Максимальная t:</span>
          <b>{{Math.ceil(weatherData[0].main.temp_max-273)}}℃</b>
        </p>
        <p>
          <span>Скорость ветра:</span>
          <b>{{Math.ceil(weatherData[0].wind.speed)}}m/s</b>
        </p>
        <p>
          <span>Угол ветра:</span>
          <b>{{Math.ceil(weatherData[0].wind.deg)}}deg</b>
        </p>

<!--        {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    cityName: String
  },
  data: () => ({
    iconUrl: '',
    weatherData: []
  }),
  methods: {
    getWeatherByCityName () {
      this.axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=89131358011ec8066582be44f133475a&lang=ru`)
        .then(response => {
          console.log(22)
          this.weatherData.push(response.data)
        })
    },
    addQueryParam () {
      this.$router.push({ query: { city: this.cityName } })
    }
  },
  created () {
    this.addQueryParam()
    this.getWeatherByCityName()
  }
}
</script>

<style scoped lang="scss">
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

</style>
