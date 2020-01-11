<template>
  <div class="col s12">
    <div class="card">
      <div class="card-image blue">
        <img :src="`http://openweathermap.org/img/wn/${this.cities[0].weather[0].icon}@2x.png`" alt="weatherIcon">
        <span class="card-title">{{cities[0].name}}</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red reload">&#8634;</a>
      </div>
      <div class="card-content">
        <p>{{cities[0].weather[0].main}}</p>
        <p>{{cities[0].weather[0].description}}</p>
        <p>Temp.: {{Math.ceil(cities[0].main.temp - 273)}}℃</p>
        <p>Min temp.: {{Math.ceil(cities[0].main.temp_min-273)}}℃</p>
        <p>Max temp.: {{Math.ceil(cities[0].main.temp_max-273)}}℃</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    cities: Array
  },
  data: () => ({
    iconUrl: ''
  })
}
</script>

<style scoped lang="scss">
  .card{
    .reload{
      font-size: 22px;
      &:hover{
        transform:rotate(720deg);
        transition:.5s ease-in;
      }
    }
    &-title{
      color:#5f6368;
    }
    &-image{
      height: 150px;
      display: flex;
      justify-content:center;
      align-items:center;
      img{
        width: 120px;
        height: 120px;
      }
    }
  }

</style>
