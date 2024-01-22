<template>
  <header class="h-52 overflow-hidden">
    <div class="logo w-86 m-auto text-white mt-6 flex justify-between">
      <the-logo></the-logo>
      <navbar-links />
    </div>
  </header>
</template>

<script setup>
//import Navbar
import TheLogo from "../TheNavbar/TheLogo.vue";
import NavbarLinks from "../TheNavbar/NavbarLinks.vue";
</script>

<style scoped>
header {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
}
</style>
