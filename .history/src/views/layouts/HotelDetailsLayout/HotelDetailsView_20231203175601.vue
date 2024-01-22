<template>
  <div>
    <base-spinner v-if="isLoading"></base-spinner>
    <hotel-details v-else></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
</script>

<style scoped></style>
