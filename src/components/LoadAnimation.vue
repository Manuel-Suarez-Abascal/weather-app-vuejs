<template>
  <div class="animation__loading">
    <div class="animation__loading__bar">
      <span class="animation__loading__bar-fill"></span>
      <span class="animation__loading__bar-inside"></span>       
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadAnimation',
}
</script>

<style lang="scss" scoped>
.animation__loading {
  margin-top: 40vh;
  padding:0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &__bar {
    width: 300px;
    margin: 50px auto 0;
    text-align: center;
    position: relative;
    &-fill {
      border-radius: 5px;
      margin: auto;
      background: #4CA1AF;
      width: 200px;
      height: 40px;
      display: block;
      position: absolute;
      top: 0;
    }
    &-inside {
      border-radius: 5px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      margin: auto;
      background: #fff;
      width: 190px;
      height: 30px;
      display: block; 
      z-index: 3;
      position: absolute;
      top: 5px;
      left: 5px;
      transform-origin: 100% 50%;
      transform: scalex(1);
      animation: processing 1.5s infinite;
    }
  }
}

@keyframes processing {
  0% {
    transform: scalex(1);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  10%{
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  100% {
    transform: scalex(0);
  }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
