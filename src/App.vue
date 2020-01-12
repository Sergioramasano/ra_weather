<template>
  <main id="app">
    <nav
      v-if="detalization"
      id="nav"
      class="grey accent-4"
      @click="closeDetails"
    >
      <router-link
        to="/">
        Home
      </router-link>
    </nav>
    <router-view/>
  </main>
</template>
<script>
export default {
  data: () => ({
  }),
  computed: {
    detalization () {
      return this.$store.getters.getIsOpenDetails
    }
  },
  methods: {
    closeDetails () {
      console.log(1)
      this.$store.commit('emitCloseDetails')
    }
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    height: 100vh;
    overflow:hidden;

    #nav {
      display: flex;
      padding-left: 20px;

      a {
        font-weight: bold;

        &.router-link-exact-active {
          color: white;

          &:hover {
            color: grey;
            transition: .7s ease;
          }
        }
      }
    }
  }

  .p-2 {
    padding: 2rem;
  }

  .p-3 {
    padding: 3rem;
  }

  .mt-1 {
    margin-top: 1rem;
  }

  .mt-2 {
    margin-top: 2rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
  .ml-2{
    margin-left: 2rem;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity 2s;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
  }
</style>
