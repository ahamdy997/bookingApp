<template>
  <div v-for="dataStore in dataStore.hotelSearchData" :key="dataStore.name">
    {{ dataStore.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData();
console.log(dataStore);
</script>

<style lang="scss" scoped></style>
