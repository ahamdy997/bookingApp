<template>
  <div>
    <hotel-details></hotel-details>
    <base-spinner
      v-if="
        !dataStore.hotelDetails?.hotel_name &&
        !dataStore.hotelDescription[0].description &&
        !dataStore.hotelDetails.address
      "
    ></base-spinner>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import { useAPIData } from "@/stores/APIDataStore";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
const dataStore = useAPIData;
</script>

<style scoped></style>
