<template>
  <div></div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();
console.log(dataStore.hotelSearchData.hotels.);
</script>

<style lang="scss" scoped></style>
