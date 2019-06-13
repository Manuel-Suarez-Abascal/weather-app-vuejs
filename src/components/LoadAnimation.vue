<template>
    <div class="loading-animation">
      <div class="animation-container">
        <span class="bar-fill bar"></span>
        <span class="bar-inside bar"></span>       
      </div>
    </div>
</template>

<script>
export default {
    name: 'LoadAnimation',
    data(){
        return {

        }
    }
}
</script>

<style lang="scss">
.loading-animation {
    margin-top: 40vh;
    padding:0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.animation-container {
    width: 300px;
    margin: 50px auto 0;
    text-align: center;
    position: relative;
}


.bar-fill {
    border-radius: 5px;
    margin: auto;
    background: #4CA1AF;
    width: 200px;
    height: 40px;
    display: block;
    position: absolute;
    top: 0;
}

.bar-inside {
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: auto;
    background: white;
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

p {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
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