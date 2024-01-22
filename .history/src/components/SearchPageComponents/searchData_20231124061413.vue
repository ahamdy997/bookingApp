<template>
  <div></div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();
setInterval(() => console.log(dataStore.hotelSearchData), 1000);
</script>

<style lang="scss" scoped></style>
