<template>
  <section class="bg-[#F4F4F4]">
    <div class="bg-color-secondary w-86 mx-auto h-[700px]">
      <div class="flex w-full justify-between">
        <div class="one mt-9 w-[810px]">
          <h2 class="font-bold text-2xl">
            {{ dataStore.hotelDetails.hotel_name }}
          </h2>
          <ul class="flex">
            <li class="text-sm px-2 mt-[12px]">
              <div class="flex">
                <div v-for="n in 5" :key="n">
                  <span v-if="n <= stars(dataStore.reviewScore)"
                    ><figure>
                      <img
                        src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                        alt="stars rating"
                      /></figure
                  ></span>
                  <span v-else-if="n - 0.5 === stars(dataStore.reviewScore)"
                    ><figure>
                      <img
                        src="../../assets/Stars-for-Search-page/star-s-fill 5.svg"
                        alt="stars rating"
                      /></figure
                  ></span>
                </div>
                <span>
                  {{
                    +dataStore.reviewScore % 2 == 0
                      ? Math.round(+dataStore.reviewScore * 10) / 2 / 10
                      : Math.round((+dataStore.reviewScore * 10 + 1) / 10) / 2
                  }}
                  ({{ dataStore.reviewCount }} Reviews)</span
                >
              </div>
            </li>
          </ul>
          <p class="flex mt-[12px] text-sm">
            <span
              ><img src="../../assets/Form-Svg/location.svg" class="w-5 mr-2"
            /></span>
            {{ dataStore.hotelDetails.address }}
          </p>
          <div class="overview bg-white mt-5 h-100 rounded-lg">
            <h3 class="font-bold text-lg p-5">Overview</h3>
            <p class="p-5 text-base border-b-2 border-color-secondary">
              {{ dataStore.hotelDescription[0]?.description }}
              <br />
              <br />
              {{ dataStore.hotelDescription[1]?.description }}
            </p>

            <h3 class="font-bold text-lg p-5">Top facilities</h3>
            <div class="flex justify-between w-1/2 pl-5 pb-9">
              <ul class="text-sm">
                <li class="flex pt-1">
                  <img
                    class="w-5"
                    src="../../assets/hotel-detail-images/home-wifi 1.svg"
                    alt="wifi"
                  /><span class="pl-3">{{
                    dataStore.hotelDetails.facilities_block?.facilities[0].name
                  }}</span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="../../assets/hotel-detail-images/wind 1.svg"
                    class="w-5"
                    alt="wind"
                  /><span class="pl-3">{{
                    dataStore.hotelDetails.facilities_block?.facilities[1].name
                  }}</span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="../../assets/hotel-detail-images/car 1.svg"
                    alt="barking"
                    class="w-5"
                  /><span class="pl-3">
                    {{
                      dataStore.hotelDetails.facilities_block?.facilities[2]
                        .name
                    }}
                  </span>
                </li>
              </ul>
              <ul class="text-sm">
                <li class="flex pt-1">
                  <img
                    src="../../assets/hotel-detail-images/bag-tick-2 1.svg"
                    class="w-5"
                    alt="bag"
                  /><span class="pl-3">
                    {{
                      dataStore.hotelDetails.facilities_block?.facilities[3]
                        .name
                    }}
                  </span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="../../assets/hotel-detail-images/lifebuoy 1.svg"
                    alt="lifeguard"
                    class="w-5"
                  /><span class="pl-3">
                    {{
                      dataStore.hotelDetails.facilities_block?.facilities[4]
                        .name
                    }}
                  </span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="../../assets/hotel-detail-images/like-1 1.svg"
                    class="w-5"
                    alt="top rated"
                  /><span class="pl-3">
                    {{
                      dataStore.hotelDetails.facilities_block?.facilities[5]
                        .name
                    }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="two">
          <div class="mt-9 rounded-lg" style="height: 300px">
            <iframe
              class="rounded-lg"
              width="400"
              height="315"
              :src="
                '//maps.google.com/maps?q=' +
                dataStore.hotelDetails.latitude +
                ',' +
                dataStore.hotelDetails.longitude +
                '&z=15&output=embed'
              "
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <h3 class="font-bold text-lg p-5">Explore the area</h3>
          <div class="flex justify-between pl-5 pb-9 text-para">
            <ul class="text-sm">
              <li class="flex pt-1">
                <img
                  src="../../assets/hotel-detail-images/bxs-plane-alt 2.svg"
                  alt="location"
                  width="20"
                  height="20"
                />
                <span class="ml-2">Hotel Penselvenyia</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="../../assets/hotel-detail-images/bxs-map 1.svg"
                  width="20"
                  alt="location"
                  height="20"
                /><span class="ml-2">Travis Bakery store house</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="../../assets/hotel-detail-images/bxs-map 1.svg"
                  width="20"
                  alt="location"
                  height="20"
                /><span class="ml-2">Olivia Johnson Garden</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="../../assets/hotel-detail-images/bxs-map 1.svg"
                  width="20"
                  alt="location"
                  height="20"
                /><span class="ml-2">Norman Opera Circus</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="../../assets/hotel-detail-images/bxs-map 1.svg"
                  width="20"
                  height="20"
                  alt="location"
                /><span class="ml-2">Rockdeset hotel</span>
              </li>
            </ul>
            <ul class="text-sm">
              <li class="flex pt-1">
                <span class="pl-3">2 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">10 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">15 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">20 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">23 min drive</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();

const stars = (data) => {
  return Number(
    data % 2 == 0
      ? Math.round(+data * 10) / 2 / 10
      : Math.round((+data * 10 + 1) / 10) / 2
  );
};
</script>

<style scoped></style>
