<template>
  <div v-for="data in dataStore.hotelSearchData" :key="dataStore.name">
    {{ data.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData();
console.log(dataStore.hotelSearchData);
</script>

<style lang="scss" scoped></style>
