<script setup>
import Portfolio from './components/Portfolio.vue';
</script>

<template>
  
    <div class="logo">
      <router-link to="/">
  <img alt="Vue logo" class="logo" src="../src/assets/logo.png"  />
      </router-link>
</div>
  <div>
    <router-view></router-view>
    <div class="actions">
      <router-link to="/gallery">
        <img src="../src/assets/gallery.svg" alt="">
      </router-link>
      <router-link to="/">
      <img src="../src/assets/social.svg" alt="">
    </router-link>
    <router-link to="/about">
      <img src="../src/assets/about.svg" alt="">
    </router-link>
    </div>
    <div class="addonscamera">
      <img class="camerar" src="../src/assets/camerar.svg" alt="">
      <img class="cameral" src="../src/assets/cameral.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
body{
  background-color: black;
}
.logo {
  z-index: 10;
  position: absolute;
  padding-bottom: 20px;
  top: 0px;
  left: 45%;
  height: 14rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #a31919aa);
}
.camerar {
position: absolute;
bottom: 10px;
right: 10px;
}
.cameral {
position: absolute;
top: 10px;
left: 10px;
}

.actions {
  position: absolute;
  bottom: 10px;
  left: 40%;
  will-change: filter;
  transition: filter 300ms;
  z-index: 11;
}

.actions img:hover {
  cursor: pointer;
  filter: invert(20%) drop-shadow(0 0 2em #ffffffaa);
}

/* Media query for small screens */
@media (max-width: 768px) {

 .addonscamera {
    display: none;
 }

 .logo {
    left: 50%;
    transform: translateX(-50%);
    height: 10rem; /* Adjust the size as needed */
 }

 .actions {
    display: flex;
    justify-content: space-around; /* Distributes the items evenly */
    align-items: center; /* Aligns items vertically in the center */
    flex-direction: row; /* Stacks items horizontally */
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto; /* Centers the container */
    width: 100%; /* Adjust the width as needed */
   
 }

 .actions img {
    
    height: 50px;
 }
}
</style>