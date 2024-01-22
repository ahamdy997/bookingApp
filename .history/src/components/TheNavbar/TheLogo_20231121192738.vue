<template>
  <div class="flex items-center gap-1">
    <figure>
      <img :src="logoSrc" width="24" height="24" alt="dream place logo" />
    </figure>
    <p class="logo-name text-lg font-medium">my Dream Place</p>
  </div>
</template>

<script setup>
import { onMounted, ref, useRouter } from "vue";

const logoSrc = ref("");

onMounted(() => {
  // if (route.path === "/search")
  //   logoSrc.value = require("@/assets/header-logo/searchSvg.svg");
  // else logoSrc.value = require("@/assets/header-logo/logo.svg");
  console.log(route.path);
});
</script>
