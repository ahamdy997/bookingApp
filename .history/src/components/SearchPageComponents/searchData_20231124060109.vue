<template>
  <div
    v-for="dataStore in dataStore.hotelSearchData"
    :key="{{ dataStore.property.name }}"
  >
    {{ dataStore.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData;
</script>

<style lang="scss" scoped></style>
