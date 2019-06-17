<template>
  <div id="app">
    <!-- Loading Animation Component -->
    <div v-if="loading">
      <load-animation />
    </div>
    <!-- Forecast Component -->
    <div v-else>
      <forecast msg="Worldwide Cities Weather App" />
    </div> 
  </div>
</template>

<script>
// import forecast component
import Forecast from "./components/Forecast.vue";
// import loading animation component
import LoadAnimation from "./components/LoadAnimation.vue"

export default {
  name: "app",
  components: {
    Forecast,
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