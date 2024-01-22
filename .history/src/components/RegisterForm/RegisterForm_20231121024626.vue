<template>
  <div class="w-86 m-auto h-17 flex items-center">
    <the-navbar-logo />
  </div>
  <form class="mt-24 flex justify-center flex-col m-auto">
    <header>
      <h2 class="font-semibold text-3xl">Register</h2>
    </header>
    <div class="mt-10">
      <label for="">Email address</label>
    </div>
  </form>
</template>

<script setup>
import TheNavbarLogo from "../TheNavbar/TheLogo.vue";
</script>

<style scoped>
form {
  width: 38.5%;
}
</style>
