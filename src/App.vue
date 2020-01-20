<template>
  <main
    id="app"
    class="cities container-fluid"
    :style="{ 'background-image': `url(${require('./assets/sky.jpeg')})`}"
  >
    <nav
      v-if="home"
      id="nav"
      class="cyan accent-4"
      @click="closeDetails"
    >
      <router-link
        to="/"
        class="home-link"
      >
        &#8617;
      </router-link>
    </nav>
    <transition name="rout" mode="out-in">
      <router-view
        class="view"
      />
    </transition>
  </main>
</template>
<script>
export default {
  computed: {
    home () {
      return this.$route.path !== '/'
    }
  },
  methods: {
    closeDetails () {
      this.$router.push('/')
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
    flex-grow: 1;
    color: black;
    overflov-y: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    #nav {
      display: flex;
      padding-left: 20px;

      .home-link {
        font-size: 32px;
      }

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

  .pt-0 {
    padding-top: 0;
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

  .ml-2 {
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

  .rout-enter-active {
    transition: all .5s ease;
  }

  .rout-leave-active {
    transition: all 1s ease;
  }

  .rout-enter, .rout-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
