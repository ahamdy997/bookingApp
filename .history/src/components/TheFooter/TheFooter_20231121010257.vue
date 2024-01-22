<template>
  <footer class="w-86 m-auto mt-20 flex">
    <div class="logo w-1/5">
      <the-logo />
      <p class="text-sm ml-6">Your next goto companion for travel</p>
    </div>
    <div class="w-1/5">
      <h2 class="">Company</h2>
      <ul>
        <li><a>About</a></li>
        <li><a>Jobs</a></li>
        <li><a>Newsroom</a></li>
        <li><a>Advertising</a></li>
        <li><a>Contact us</a></li>
      </ul>
    </div>
    <div class="w-1/5">
      <h2 class="">Explore</h2>
      <ul>
        <li><a>Australia</a></li>
        <li><a>Jobs</a></li>
        <li><a>Newsroom</a></li>
        <li><a>Advertising</a></li>
        <li><a>Contact us</a></li>
      </ul>
    </div>
    <div class="w-1/5"></div>
    <div class="w-1/5"></div>
  </footer>
</template>

<script setup>
//import logo
import TheLogo from "@/components/TheNavbar/TheLogo.vue";
</script>

<style scoped>
div {
  background-color: tomato;
}
a,
p {
  color: #4f4f4f;
}
</style>
