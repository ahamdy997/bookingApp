<template>
  <div v-for="data in dataStore" :key="data.name">{{ data.property.name }}</div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();
</script>

<style lang="scss" scoped></style>
