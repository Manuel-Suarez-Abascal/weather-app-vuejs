<template>
  <div id="app">
    <!-- Loading Animation Component -->
    <div v-if="loading">
      <load-animation />
    </div>
    <!-- Forecast Component -->
    <div v-else>
      <forecast />
    </div>
  </div>
</template>

<script>
// import forecast & LoadAnimation component
import LoadAnimation from "./components/LoadAnimation.vue";
import Forecast from "./components/Forecast.vue";

export default {
  name: "app",
  components: {
    Forecast,
    LoadAnimation
  },
  data() {
    return {
      // Onload animation is true
      loading: true
    };
  },
  methods: {
    // Sets loading to false & ends loading animation
    endLoadAnimation() {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  },
  mounted() {
    // Call function to end animation onload
    this.endLoadAnimation();
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
p {
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
}
</style>
