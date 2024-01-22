<template>
  <div>
    <hotel-details
      v-if="
        dataStore.hotelDetails.hotel_name &&
        dataStore.hotelDescription[0].description &&
        dataStore.hotelDetails.address
      "
    ></hotel-details>
    <base-spinner v-else></base-spinner>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import dataStore from "@/stores/APIDataStore";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
</script>

<style scoped></style>
