<template>
  <div
    class="row mt-1"
    style="display: flex; justify-content: center; align-items: center;"
  >
    <div class="input-field">
      <input
        v-model="city"
        id="last_name"
        type="text"
        class="validate"
        @keyup.enter="emitCity"
      >
      <label for="last_name">City</label>
    </div>
    <button
      @click.prevent="emitCity"
      class="btn waves-effect waves-light ml-2"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'addCity',
  data: () => ({
    city: ''
  }),
  methods: {
    emitCity () {
      this.$emit('addCity', this.city)
      this.city = ''
    }
  }
}
</script>

<style scoped lang="scss">
  #last_name {
    color: white;
  }
</style>
