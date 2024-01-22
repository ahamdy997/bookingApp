<template>
  <div class="flex items-center gap-1">
    <figure>
      <img :src="logoSrc" width="24" height="24" alt="dream place logo" />
    </figure>
    <p class="logo-name text-lg font-medium">my Dream Place</p>
  </div>
</template>

<script setup>
//imports
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// handling navbar logo in different pages
const logoSrc = ref("");
const route = useRoute();

onMounted(() => {
  if (route.fullPath === "/search")
    logoSrc.value = require("@/assets/header-logo/searchSvg.svg");
  else logoSrc.value = require("@/assets/header-logo/logo.svg");
});
</script>
