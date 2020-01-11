<template>
  <div class="col s12 m3">
    <div class="card">
      <div class="card-image blue">
        <img :src="`http://openweathermap.org/img/wn/${this.cities[0].weather[0].icon}@2x.png`" alt="weatherIcon">
        <span class="card-title">{{cities[0].name}}</span>
        <a
          @click.prevent="reload(cities[0].name)"
          class="btn-floating halfway-fab waves-effect waves-light red reload">
          &#8634;
        </a>
      </div>
      <div class="card-content">
        <div class="mb-1">
          <p>
            <span>description:</span>
            <b>{{cities[0].weather[0].description}}</b>
          </p>
          <p>
            <span>Temp.:</span>
            <b>{{Math.ceil(cities[0].main.temp - 273)}}℃</b>
          </p>
          <p>
            <span>Min temp.:</span>
            <b>{{Math.ceil(cities[0].main.temp_min-273)}}℃</b>
          </p>
          <p>
            <span>Max temp.:</span>
            <b>{{Math.ceil(cities[0].main.temp_max-273)}}℃</b>
          </p>
        </div>
        <a
          @click="emitOpenDetails"
          class="waves-effect waves-light btn-small more"
        >
          Details...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    cities: Array
  },
  data: () => ({
    iconUrl: ''
  }),
  methods: {
    reload (name) {
      this.$emit('reload', name)
    },
    emitOpenDetails () {
      this.$emit('emitOpenDetails', this.cities[0].name)
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
      color: #5f6368;
    }

    &-content {
      p {
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
        width: 120px;
        height: 120px;
      }
    }
  }

</style>
