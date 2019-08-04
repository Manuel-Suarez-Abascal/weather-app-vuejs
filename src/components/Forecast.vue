<template>
  <div class="forecast container animated fadeIn delay-4">
    <!-- Burger Menu Component which takes you to wikipedia -->
    <Slide right>
      <span>
        Read about:
        <a
          class="text-white ml-2"
          :href="wikipediaLink + currentWeather.name"
          target="_blank"
          rel="noopener"
          >{{ currentWeather.name }}</a
        >
      </span>
    </Slide>

    <MetaInfo title="Worldwide Cities Weather App"> </MetaInfo>

    <!-- Input field value -->
    <b-row class="justify-content-center mt-4">
      <b-col col xl="3" lg="3" md="4" sm="12" cols="12">
        <b-form @submit.prevent="getWeather">
          <b-form-input
            value=""
            aria-label="Input to select city"
            type="text"
            v-model.lazy="currentCity"
            placeholder="Enter a valid city"
          ></b-form-input>
        </b-form>
      </b-col>
    </b-row>

    <!-- Forecast values -->
    <div
      class="forecast__values container shadow p-4 mt-4"
      v-if="currentWeather && currentWeather.cod == 200"
    >
      <div class="m-2"><strong>City:</strong> {{ currentWeather.name }}</div>
      <div class="m-2">
        <strong>ISO Country Code:</strong> {{ currentWeather.sys.country }}
      </div>
      <div class="m-2">
        <strong>Weather condition: </strong>
        <span class="text-capitalize">{{
          currentWeather.weather[0].description
        }}</span>
      </div>
      <div class="m-2">
        <strong>Temperature: </strong>{{ currentWeather.main.temp }}° C
        <span
          ><img
            :src="this.currentIcon"
            alt="Weather Condition Representation Icon"
        /></span>
      </div>
      <div class="m-2">
        <strong>Humidity: </strong> {{ currentWeather.main.humidity }}%.
      </div>
      <div class="m-2">
        <strong>Pressure: </strong> {{ currentWeather.main.pressure }} hpa
      </div>
      <div class="m-2">
        <strong>Wind Speed: </strong> {{ currentWeather.wind.speed }} m/s
      </div>
      <div class="m-2">
        <strong>Geo coords: </strong> <span>Lattitude:</span
        >{{ currentWeather.coord.lat }} || <span>Longitude:</span>
        {{ currentWeather.coord.lon }}
      </div>
    </div>
    <div v-else>"{{ currentCity }}" is not a valid.</div>
  </div>
</template>

<script>
// import Axios library, Slide & MetaInfo components
import axios from "axios";
import { Slide } from "vue-burger-menu";
import MetaInfo from "./MetaInfo.vue";

export default {
  // registed components
  components: {
    Slide,
    MetaInfo
  },
  name: "Forecast",
  data() {
    return {
      // current weather
      currentWeather: null,
      // current city
      currentCity: "Montreal",
      // current country
      currentCountry: "world",
      // current unit
      unit: "metric",
      // current icon
      currentIcon: null,
      // wikipedia url
      wikipediaLink: "https://en.wikipedia.org/wiki/"
    };
  },
  methods: {
    getWeather() {
      // make axios request to open weather api
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.currentCity +
            "," +
            this.currentCountry +
            "&appid=fe435501a7f0d2f2172ccf5f139248f7&units=" +
            this.unit +
            ""
        )
        .then(response => {
          // takes response object & stores it in currentWeather
          this.currentWeather = response.data;
          // takes value for image icon
          this.currentIcon =
            "https://openweathermap.org/img/w/" +
            this.currentWeather.weather[0].icon +
            ".png";
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  mounted() {
    // Calls Weather API response onload
    this.getWeather();
  }
};
</script>

<style scoped lang="scss">
/* Animation fadeIn onload from animate.css */
.animated {
  -webkit-animation-duration: 1.7s;
  animation-duration: 1.7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
