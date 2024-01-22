<template>
  <div class="gap-12 flex items-start">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Discover</router-link>
    <router-link to="/about">Activities</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/about">Contact</router-link>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

// handling navbar logo in different pages
const logoSrc = ref("");
const route = useRoute();

onBeforeMount(() => {
  if (route.fullPath === "/search")
    logoSrc.value = require("@/assets/header-logo/searchSvg.svg");
  else logoSrc.value = require("@/assets/header-logo/logo.svg");
  console.log(route.fullPath);
});
</script>

<style scoped>
a {
  color: #333;
}
</style>
