<template>
  <div class="flex items-center gap-1">
    <figure>
      <img
        src="@/assets/header-logo/logo.svg"
        width="24"
        height="24"
        alt="dream place logo"
      />
    </figure>
    <p class="logo-name text-lg font-medium">my Dream Place</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(window.location.pathname);
});
</script>
