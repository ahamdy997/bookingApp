<template>
  <div class="flex gap-6 items-center">
    <figure>
      <img :src="logoSrc" alt="notification bell" width="24" height="24" />
    </figure>
    <figure>
      <img
        src="@/assets/header-logo/user.svg"
        width="44"
        height="44"
        alt="user picture"
      />
    </figure>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  if (route.fullPath === "/search")
    logoSrc.value = require("@/assets/header-logo/searchSvg.svg");
  else logoSrc.value = require("@/assets/header-logo/logo.svg");
  console.log(route.fullPath);
});
</script>

<style scoped></style>
