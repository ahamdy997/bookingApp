<template>
  <div class="home">
    <the-header></the-header>
    <covid-warning></covid-warning>
    <enjoy-dream></enjoy-dream>
    <next-trip></next-trip>
    <hotle-section></hotle-section>
  </div>
</template>

<script setup>
// imports
import TheHeader from "@/components/HomeComponents/HeaderComponent/TheHeader.vue";
import CovidWarning from "@/components/HomeComponents/CovidWarning/CovidWarning.vue";
import EnjoyDream from "@/components/HomeComponents/EnjoyDreamComponent/EnjoyDream.vue";
import NextTrip from "@/components/HomeComponents/NextTripComponent/NextTrip.vue";
import HotleSection from "@/components/HomeComponents/popularHotelComponent/HotleSection.vue";
</script>
