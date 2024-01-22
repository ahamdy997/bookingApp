<template>
  <div v-for="dataStore in dataStore.s"></div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData;
</script>

<style lang="scss" scoped></style>
