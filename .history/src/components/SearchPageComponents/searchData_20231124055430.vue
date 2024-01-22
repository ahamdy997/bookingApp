<template>
  <div v-for="data in dataX" :key="data.name">
    {{ data.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData();
</script>

<style lang="scss" scoped></style>
