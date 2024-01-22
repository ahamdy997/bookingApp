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
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const logoSrc = ref("");
const route = useRoute();

onBeforeMount(() => {
  if (route.fullPath === "/search" || route.fullPath === "/payement")
    logoSrc.value = require("@/assets/header-logo/notification.svg");
  else logoSrc.value = require("@/assets/header-logo/notification2.svg");
  console.log(route.fullPath);
});
</script>

<style scoped></style>
