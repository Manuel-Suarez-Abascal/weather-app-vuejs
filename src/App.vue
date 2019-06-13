<template>
  <div id="app">
    <!-- Loading Animation Component -->
    <div v-if="loading">
      <load-animation />
    </div>
    <!-- Home Component -->
    <div v-else>
      <Home msg="Worldwide Cities Weather App" />
    </div> 
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import LoadAnimation from "./components/LoadAnimation.vue"

export default {
  name: "app",
  components: {
    Home,
    LoadAnimation
  },
  data(){
    return {
      // Onload animation is true
      loading: true
    }
  },
  methods: {
    // Sets loading to false & ends loading animation
    endLoadAnimation() {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  },
  mounted() {
    // Call function to end animation onload
    this.endLoadAnimation()
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7088a0;
  margin-top: 60px;
}
</style>