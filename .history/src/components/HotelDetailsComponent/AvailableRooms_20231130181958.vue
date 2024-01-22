<template>
  <section class="bg-[#efefef] pb-5 h-[700px]" id="section2">
    <div class="w-86 m-auto pb-9">
      <h3 class="font-bold mt-[70px] text-lg p-5">Available rooms</h3>

      <!-- cards container-->
      <div class="flex flex-wrap justify-between">
        <!-- card 1 -->
        <div class="max-w-md card_one">
          <div class="flex space-between rounded-lg text-white text-lg pic-1">
            <div>
              <p class="flex mt-14">
                <i class="fa-solid fa-plane-departure pl-5"></i>
                <span class="pl-2">My DreamPlace</span>
              </p>
              <h2 class="font-bold text-2xl mt-5 ml-5">
                20% off Use Promotional Coupon Code:
                <span class="text-[#FFD723]">Orlando</span>
              </h2>
            </div>

            <div>
              <img
                src="../../assets/hotel-detail-images/Frame.png"
                alt="tourist image"
                class="mt-5 h-[291px] relative right-5 w-[370px] mr-5"
                width="371"
                height="291"
              />
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="max-w-md bg-white rounded-lg">
          <img src="../../assets/hotel-detail-images/Room.png" alt="Room" />
          <h3 class="font-bold text-lg m-4">
            Standard twin ben, Multiple beds
          </h3>
          <ul class="text-sm ml-4">
            <li class="flex pt-1">
              <img
                src="../../assets/hotel-detail-images/bag-tick-2 black.svg"
                class="w-5"
                alt="business bag"
              /><span class="pl-3">300 sq ft</span>
            </li>
            <li class="flex pt-2">
              <img
                src="../../assets/hotel-detail-images/lifebuoy 1black.svg"
                class="w-5"
                alt="swim pool"
              /><span class="pl-3">Sleeps 3</span>
            </li>
            <li class="flex pt-2">
              <img
                src="../../assets/hotel-detail-images/like-1 1black.svg"
                class="w-5"
                alt="like thumb picture"
              /><span class="pl-3">1 double bed and 1 twin bed</span>
            </li>
          </ul>
          <div class="text-center mt-[24px]">
            <button
              class="text-white bg-[var(--mainBlue)] rounded font-sm py-1.5 px-4 mb-6 w-11/12"
              @click="payement"
            >
              Reserve suite
              {{ dataStore.hotelDetails.available_rooms }} Available
            </button>
          </div>
        </div>
        <!-- card 3 -->
        <div class="card_two bg-white rounded-lg">
          <img src="../../assets/hotel-detail-images/Room2.png" alt="Room" />
          <h3 class="font-bold text-lg m-4">
            Standard twin ben, Multiple beds
          </h3>
          <ul class="text-sm ml-4">
            <li class="flex pt-1">
              <img
                src="../../assets/hotel-detail-images/bag-tick-2 black.svg"
                alt="business bag"
                class="w-5"
              /><span class="pl-3">300 sq ft</span>
            </li>
            <li class="flex pt-2">
              <img
                src="../../assets/hotel-detail-images/lifebuoy 1black.svg"
                alt="swim pool"
                class="w-5"
              /><span class="pl-3">Sleeps 3</span>
            </li>
            <li class="flex pt-2">
              <img
                src="../../assets/hotel-detail-images/like-1 1black.svg"
                class="w-5"
                alt="like thumb picture"
              /><span class="pl-3">{{
                path.bed_configurations[0]?.bed_types[0]?.name_with_count
              }}</span>
            </li>
          </ul>
          <div class="text-center mt-[24px]">
            <button
              class="bg-[var(--mainBlue)] rounded font-sm text-white py-1.5 px-4 mb-6 w-11/12 btn"
              @click="payement"
            >
              Reserve suite
              {{ dataStore.hotelDetails.available_rooms }} Available
            </button>
          </div>
        </div>
      </div>
    </div>
    <covid-warning></covid-warning>
    <the-footer class="bg-[#efefef] relative -top-[22px]"></the-footer>
  </section>
</template>

<script setup>
import CovidWarning from "../HomeComponents/CovidWarning/CovidWarning.vue";
import TheFooter from "../TheFooter/TheFooter.vue";
import router from "@/router";
import { computed } from "vue";

import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();

const payement = function () {
  router.push("/payement");
};
const path = computed(() => {
  return `dataStore.hotelDetails.rooms.${dataStore.hotelDetails.hotel_id}`;
});
</script>

<style scoped>
.card_one {
  border-radius: 6px;
  background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
  width: 400px;
  height: 340px;
}
</style>
