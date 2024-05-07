<template>
  <div class="container">
    <div class="circle">
      <img src="../assets/circle.svg" alt="">
    </div>

    <div class="showcase">
      <img class="center" src="../assets/showcase.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
};
</script>

<style>
body{ 
  overflow: hidden;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative; /* Make sure absolute positioning inside works correctly */
}

.circle {
  position: absolute;
  top: calc(50% - 400px);
  left: calc(50% - 370px);
  z-index: -1;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.showcase {
  width: 100%;
  max-width: 1080px;
  height: 100%; /* Set a fixed height */
  overflow: hidden; /* Hide overflowing content */
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the image */
  
  height: auto; /* Maintain aspect ratio */
}

</style>


   <!--  this is on template
    <div v-if="showAddons" class="addons">
        <img v-for="index in 5" :key="'star' + index" class="star" :style="{ top: starsY[index - 1], left: starsX[index - 1] }" src="../assets/star.svg" alt="">
        <img v-for="index in 5" :key="'plus' + index" class="plus" :style="{ top: plusesY[index - 1], left: plusesX[index - 1] }" src="../assets/plus.svg" alt="">
      </div> -->
  
  <!-- /* addons removed from script, put again if needed
   // data() {
    //   return {
    //     showAddons: false,
    //     starsX: Array.from({ length: 5 }, () => this.getRandomPosition()),
    //     starsY: Array.from({ length: 5 }, () => this.getRandomPosition()),
    //     plusesX: Array.from({ length: 5 }, () => this.getRandomPosition()),
    //     plusesY: Array.from({ length: 5 }, () => this.getRandomPosition())
    //   };
    // },
    // methods: {
    //   getRandomPosition() {
    //     return `${Math.floor(Math.random() * window.innerWidth)}px`;
    //   },
    //   showAddonsAfterDelay() {
    //     setTimeout(() => {
    //       this.showAddons = true;
    //     }, 3000); // Show addons after 3 seconds
    //   }
    // },
    // mounted() {
    //   this.showAddonsAfterDelay();
  
    //   setInterval(() => {
    //     this.starsX = this.starsX.map(() => this.getRandomPosition());
    //     this.starsY = this.starsY.map(() => this.getRandomPosition());
    //     this.plusesX = this.plusesX.map(() => this.getRandomPosition());
    //     this.plusesY = this.plusesY.map(() => this.getRandomPosition());
    //   }, 2000); // Change the interval to adjust the speed of movement
    // } */ -->

    <!-- this is css
       .addons {
      position: absolute;
      top: 0;
      left: 0;
      width: 90vw;
      height: 90vh;
      pointer-events: none; /* Ensure stars don't interfere with mouse events */
    }
    
    .star,
    .plus {
      position: absolute;
      width: 40px; /* Adjust size as needed */
      height: 40px; /* Adjust size as needed */
      animation: spinning 1s linear infinite; /* Make the spinning animation continuous */
    }
    
    .star {
      animation: spinning 2s linear infinite; /* Make the spinning animation continuous */
    }
    
    @keyframes spinning {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }   -->