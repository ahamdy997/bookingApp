<template>
  <div class="w-86 m-auto h-17 flex items-center">
    <the-navbar-logo />
  </div>
  <form class="mt-24 flex justify-center flex-col m-auto">
    <header class="m-auto">
      <h2 class="font-semibold text-3xl">Register</h2>
    </header>
    <div class="mt-10">
      <label for="E-mail" class="text-sm font-medium">Email address</label
      ><br />
      <input type="email" id="E-mail" class="w-full p-3 rounded" />
    </div>

    <div class="mt-5">
      <label for="E-mail" class="text-sm font-medium">Email address</label
      ><br />
      <input type="email" id="E-mail" class="w-full p-3 rounded" />
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
input {
  background-color: rgba(242, 242, 242, 1);
  outline: none;
}
</style>
