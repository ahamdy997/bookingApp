<template>
  <div class="w-86 m-auto h-17 flex items-center">
    <the-navbar-logo />
  </div>
  <form class="mt-24 flex justify-center flex-col m-auto">
    <header class="m-auto">
      <h2 class="font-semibold text-3xl">Sign in</h2>
    </header>
    <div class="mt-10">
      <label for="E-mail" class="text-sm font-medium">Email address</label
      ><br />
      <input type="email" id="E-mail" class="w-full p-3 rounded" />
    </div>

    <div class="mt-5">
      <label for="pass" class="text-sm font-medium">Password</label><br />
      <input type="password" id="pass" class="w-full p-3 rounded" />
    </div>

    <button type="button" class="mt-9 h-11 rounded-lg text-white">
      Submit
    </button>

    <div class="mt-9 text-center">
      <p>Already have an account? <RouterLink to="/"> Sign in </RouterLink></p>
    </div>
  </form>
</template>

<script setup>
import { RouterLink } from "vue-router";
import TheNavbarLogo from "../TheNavbar/TheLogo.vue";
</script>
