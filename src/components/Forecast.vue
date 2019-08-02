<template>
  <div class="forecast container animated fadeIn delay-4">
    <!-- Burger Menu Component which takes you to wikipedia -->
    <Slide right>
        <span>
          Read about:  
          <a class="text-white ml-2" :href="this.wikipediaLink + currentWeather.name" target="_blank">{{ currentWeather.name }}</a>
        </span>
    </Slide>
    
    <h1>{{ msg }}</h1>
    <div class="forecast app-title my-3">
      <p class="m-2">A weather app built <a class="vuejs-link text-decoration-none" href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a> & <a class="open-weather-api-link text-decoration-none" href="https://openweathermap.org/" target="_blank" rel="noopener">OpenWeatherMap API.</a></p>

      <p class="m-2">Made with &#10084;&#65039; by <a class="github-profile-link color-info text-decoration-none" href="https://github.com/Manuel-Suarez-Abascal" target="_blank" rel="noopener">Manuel Abascal</a></p>

      <!-- Input field value -->
      <b-row class="justify-content-center mt-4">
        <b-col col xl="3" lg="3" md="4" sm="12" cols="12">
          <b-form @submit.prevent="getWeather">
            <b-form-input value="" aria-label="Input to select city" type="text" v-model.lazy="currentCity" placeholder="Enter a valid city"></b-form-input>
          </b-form>
        </b-col>
      </b-row>

      <!-- Forecast stat values -->
      <div class="container forecast shadow p-4 mt-4" v-if="currentWeather && currentWeather.cod == 200">
        <div class="m-2"><strong>City:</strong> {{ currentWeather.name }}</div>
        <div class="m-2"><strong>ISO Country Code:</strong> {{ currentWeather.sys.country }}</div>
        <div class="m-2"><strong>Weather condition: </strong> <span class="weather-condition">{{ currentWeather.weather[0].description }}</span></div>
        <div class="m-2"><strong>Temperature: </strong>{{ currentWeather.main.temp }}° C <span><img :src="this.currentIcon" alt="Weather Condition Representation Icon"></span></div>
        <div class="m-2"><strong>Humidity: </strong> {{ currentWeather.main.humidity }}%.</div>
        <div class="m-2"><strong>Pressure: </strong> {{ currentWeather.main.pressure }} hpa</div>
        <div class="m-2"><strong>Wind Speed: </strong> {{ currentWeather.wind.speed }} m/s</div>
        <div class="m-2"><strong>Geo coords: </strong> <span>Lattitude:</span>{{ currentWeather.coord.lat }} || <span>Longitude:</span> {{ currentWeather.coord.lon }}</div>
        
      </div>
      <div v-else>
        "{{ currentCity }}" is not a valid.
      </div>
    </div>
  </div>
</template>

<script>
// import Axios
import axios from "axios"
// import the CSS transitions you wish to use, in this case we are using `Slide`
import { Slide } from 'vue-burger-menu'  
 
export default {
  components: {
    // Registered burger menu as child component
    Slide
  },
  name: "Forecast",
  props: {
    msg: String,
  },
  data(){
    return {
      // current weather
      currentWeather: null,
      // current city
      currentCity: 'Montreal',
      // current country
      currentCountry: 'world',
      // current unit
      unit: 'metric',
      // current icon
      currentIcon: null,
      // wikipedia url
      wikipediaLink: 'https://en.wikipedia.org/wiki/'
    }
    this.$set(this.currentCity);
  },
  methods: {
    getWeather(){
      // Make axios request to open weather api
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.currentCity+ ',' + this.currentCountry + '&appid=fe435501a7f0d2f2172ccf5f139248f7&units=' + this.unit + '')
      .then((response) => {
          // takes response object & stores it in currentWeather
          this.currentWeather = response.data
          console.log(this.currentWeather)
          // takes value for image icon
          this.currentIcon = 'https://openweathermap.org/img/w/' + this.currentWeather.weather[0].icon + '.png'
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
  },
  mounted() {
    // Calls Weather API response in load
    this.getWeather();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Links styling */
.vuejs-link {
  color: #4fc08d;
  &:hover {
    color: #0d9155;
  }
}

.github-profile-link {
  color: #2c88e9;
  &:hover {
    color: #0357b1;
  }
}

.open-weather-api-link {
  color: #d26c22;
  &:hover {
    color: #b44b00;
  }
}
.vuejs-link, .github-profile-link, .open-weather-api-link {
  font-weight: bold;
}

.weather-condition {
  text-transform: capitalize
}

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