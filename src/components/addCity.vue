<template>
  <div
    class="row mt-1"
    style="display: flex; justify-content: center; align-items: center;"
  >
    <div class="input-field">
      <input id="last_name" type="text" class="validate">
      <label for="last_name">City</label>
    </div>
    <button class="btn waves-effect waves-light ml-2" type="submit" name="action">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'addCity'
}
</script>

<style scoped>

</style>
