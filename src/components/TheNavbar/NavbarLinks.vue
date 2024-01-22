<template>
  <div class="gap-12 flex items-start">
    <router-link :style="textColor" to="/">Home</router-link>
    <router-link :style="textColor" to="/about">Discover</router-link>
    <router-link :style="textColor" to="/about">Activities</router-link>
    <router-link :style="textColor" to="/about">About</router-link>
    <router-link :style="textColor" to="/about">Contact</router-link>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

// handling navbar Links color in different pages
const textColor = ref("");
const route = useRoute();

onBeforeMount(() => {
  if (route.fullPath === "/search") textColor.value = { color: "#fff  " };
  else textColor.value = { color: "#3333333" };
});
</script>

<style scoped>
a {
  color: #333;
}
</style>
