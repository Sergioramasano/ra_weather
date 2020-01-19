<template>
  <div class="col s12 m3">
    <div class="card">
      <div class="card-image blue">
        <a
          v-if="!unclose"
          @click.prevent="deleteCity(index)"
          class="closer"
        >
          x
        </a>
        <img :src="`http://openweathermap.org/img/wn/${this.weatherData[index].weather[0].icon}@2x.png`"
             alt="weatherIcon">
        <span class="card-title">{{weatherData[index].name}}</span>
        <a
          @click.prevent="reload(weatherData[index].name, index)"
          class="btn-floating halfway-fab waves-effect waves-light red reload">
          &#8634;
        </a>
      </div>
      <div class="card-content">
        <div class="mb-1">
          <p>
            <span>Описание:</span>
            <b>{{weatherData[index].weather[0].description}}</b>
          </p>
          <p>
            <span>Температура.:</span>
            <b>{{Math.ceil(weatherData[index].main.temp - 273)}}℃</b>
          </p>
          <p>
            <span>Минимальная t:</span>
            <b>{{Math.ceil(weatherData[index].main.temp_min-273)}}℃</b>
          </p>
          <p>
            <span>Максимальная t:</span>
            <b>{{Math.ceil(weatherData[index].main.temp_max-273)}}℃</b>
          </p>
        </div>
        <a
          @click="emitOpenDetails(index)"
          class="waves-effect waves-light btn-small more"
        >
          Подробнее...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    index: Number,
    weatherData: Array,
    unclose: Boolean
  },
  data: () => ({
    iconUrl: ''
  }),
  methods: {
    reload (name, index) {
      this.$emit('reload', [name, index])
    },
    deleteCity (index) {
      this.$store.commit('DELETE_CITY', index)
      localStorage.setItem('array', JSON.stringify(this.weatherData))
    },
    emitOpenDetails () {
      this.$emit('openDetails', this.weatherData[this.index])
      this.$store.commit('SET_INDEX', this.index)
    }
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
        display: flex;
        justify-content: space-between;
        b{
          text-overflow: ellipsis;
          display: block;
          overflow: hidden;
          width: 140px;
          white-space: nowrap;
          text-align: right;
        }
      }
    }

    &-image {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .closer{
        position: absolute;
        display: block;
        top: 10px;
        right: 10px;
        color: black;
        cursor: pointer;
        &:hover{
          transform:rotate(360deg);
          transition:1s ease;
        }
      }
      img {
        width: 90px;
        height: 90px;
      }
    }
  }

</style>
