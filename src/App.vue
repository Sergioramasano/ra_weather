<template>
  <main id="app">
    <nav
      v-if="false"
      id="nav"
      class="grey accent-4"
    >
      <router-link to="/">Home</router-link>
    </nav>
    <router-view/>
  </main>
</template>
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
</style>
