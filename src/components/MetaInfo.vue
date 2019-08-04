<template>
  <div class="meta__info">
    <h1 class="meta__info__title">{{ title }}</h1>
    <div class="meta__info-link my-3">
      <p class="m-2">
        A weather app built
        <a
          class="meta__info__link__vue font-weight-bold text-decoration-none"
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener"
          >Vue.js</a
        >
        &
        <a
          class="meta__info__link__openweather font-weight-bold text-decoration-none"
          href="https://openweathermap.org/"
          target="_blank"
          rel="noopener"
          >OpenWeatherMap API.</a
        >
      </p>
      <p class="m-2">
        Made with &#10084;&#65039; by
        <a
          class="meta__info__link__github color-info font-weight-bold text-decoration-none"
          href="https://github.com/Manuel-Suarez-Abascal"
          target="_blank"
          rel="noopener"
          >Manuel Abascal</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaInfo",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.meta__info {
  &__link {
    &__vue {
      color: #4fc08d;
      &:hover {
        color: #0d9155;
      }
    }
    &__openweather {
      color: #d26c22;
      &:hover {
        color: #b44b00;
      }
    }
    &__github {
      color: #2c88e9;
      &:hover {
        color: #0357b1;
      }
    }
  }
}
</style>
