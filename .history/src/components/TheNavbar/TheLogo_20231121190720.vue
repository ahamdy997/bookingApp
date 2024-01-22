<template>
  <div class="flex items-center gap-1">
    <figure>
      <img :src="logoSrc" width="24" height="24" alt="dream place logo" />
    </figure>
    <p class="logo-name text-lg font-medium">my Dream Place</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const logoSrc = ref("");

onMounted(() => {
  if (window.location.pathname === "/search")
    logoSrc.value = require("@/assets/header-logo/logo.svg");
  else
});
</script>
