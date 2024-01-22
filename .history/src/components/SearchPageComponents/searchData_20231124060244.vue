<template>
  <div
    v-for="dataStore in dataStore.hotelSearchData"
    :key="dataStore.property.name"
  >
    {{ dataStore.property.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();
console.log(dataStore.property.name);
</script>

<style lang="scss" scoped></style>
