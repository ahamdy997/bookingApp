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
import { useRouter } from "vue-router";

const logoSrc = ref("");
const route = useRouter();

onMounted(() => {
  // if (route.path === "/search")
  //   logoSrc.value = require("@/assets/header-logo/searchSvg.svg");
  // else logoSrc.value = require("@/assets/header-logo/logo.svg");
  console.log(route);
});
</script>
