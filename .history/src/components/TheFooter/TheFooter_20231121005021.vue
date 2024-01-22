<template>
  <footer class="w-86 m-auto mt-20 flex">
    <div class="logo w-1/5">
      <the-logo />
      <p class="text-sm ml-6">Your next goto companion for travel</p>
    </div>
    <div class="w-1/5">
      <h2 class="font-semibold">Company</h2>
    </div>
    <div class="w-1/5"></div>
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
</style>
