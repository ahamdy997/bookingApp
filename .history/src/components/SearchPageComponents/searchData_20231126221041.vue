<template>
  <div
    v-if="dataStore.hotelSearchData.length > 0"
    class="search-result w-[915px] me-auto"
  >
    <h2 class="font-semibold text-2xl w-[504px]">
      {{ useDataAlive.searchQuery }} :
      {{ dataStore.hotelSearchData.length }} search results found
    </h2>
    <ul>
      <li
        v-for="data in dataStore.hotelSearchData"
        :key="data.property.name"
        class="border rounded-[5px] mt-10 p-5"
      >
        <div class="flex items-center h-full">
          <figure class="mr-6">
            <img
              :src="data.property.photoUrls"
              alt="hotel picture"
              width="285"
              height="200"
              class="h-[200px]"
            />
          </figure>
          <div class="content flex flex-col h-[220px] justify-around">
            <h2 class="font-semibold text-xl w-[300px]">
              {{ data.property.name }}
            </h2>
            <div class="rating flex items-center">
              <div class="star-rating flex">
                <div v-for="n in 5" :key="n">
                  <span v-if="n <= stars(.property.reviewScore)" class="filled"
                    >&#9733;</span
                  >
                  <span v-else-if="n - 0.5 === stars" class="half"
                    >&#9733;</span
                  >
                  <span v-else>&#9734;</span>
                </div>
              </div>

              <p class="text-sm text-[#4f4f4f] ml-[12px]">
                {{
                  +data.property.reviewScore % 2 == 0
                    ? Math.round(+data.property.reviewScore * 10) / 2 / 10
                    : Math.round((+data.property.reviewScore * 10 + 1) / 10) / 2
                }}
                ({{ data.property.reviewCount }}
                Reviews)
              </p>
            </div>
            <p class="text-[13px] text-[#4f4f4f] font-medium w-[380px]">
              {{ data.accessibilityLabel }}
            </p>

            <button
              type="button"
              class="text-white bg-[var(--mainBlue)] w-[150px] py-2.5 px-[18px] rounded-md"
            >
              See Availability
            </button>
          </div>
          <div class="ms-auto text-end">
            <p
              v-if="
                data.property.priceBreakdown?.excludedPrice?.value != undefined
              "
              class="text-white bg-[#EB5757] text-[13px] py-1 px-2 rounded-md"
            >
              Book now and receive
              {{
                Math.round(
                  ((Number(data.property.priceBreakdown.excludedPrice.value) *
                    100) /
                    Number(data.property.priceBreakdown.grossPrice.value)) *
                    100
                ) / 100
              }}% off
            </p>

            <p
              class="mt-16 ms-auto py-1 px-2 text-[13px] bg-[#219653] text-white rounded-md w-fit"
              v-if="data.property.priceBreakdown?.excludedPrice?.value"
            >
              {{
                Math.round(
                  (Number(data.property.priceBreakdown.excludedPrice.value) *
                    100000) /
                    (Number(data.property.priceBreakdown.grossPrice.value) *
                      1000)
                )
              }}% off
            </p>
            <div
              class="price mt-[29px] flex justify-end gap-2 items-center flex-wrap"
            >
              <p class="text-sm text-[#EB5757] line-through">
                $ {{ data.property.priceBreakdown.grossPrice.value.toFixed(2) }}
              </p>
              <p
                class="text-xl"
                v-if="data.property.priceBreakdown?.excludedPrice?.value"
              >
                $
                {{
                  data.property.priceBreakdown.excludedPrice.value.toFixed(2)
                }}
              </p>
            </div>
            <p class="mt-[6px] text-[rgba(97,97,97,1)] text-sm font-light">
              Includes taxes and fees
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="search-result w-[915px] me-auto" v-else>
    <p class="text-[20px] text-red-700 font-semibold">
      No Result Found... Please Make Sure Of The Typed Name
    </p>
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
import { keepDataAlive } from "@/stores/KeepingDataAlive";
import { computed } from "vue";
// import StarsNumber from "@/components/HotelStarsRating/starRating.vue";
const dataStore = useAPIData();
const useDataAlive = keepDataAlive();
// console.log(dataStore.hotelSearchData);
const stars = computed((data) => {
  return Number(
    data % 2 == 0
      ? Math.round(+data * 10) / 2 / 10
      : Math.round((+data * 10 + 1) / 10) / 2
  );
});
</script>

<style scoped>
.star-rating {
  font-size: 20px;
  color: transparent;
  text-shadow: 0 0 0 #ffd700;
}

.filled,
.half {
  color: transparent;
  text-shadow: 0 0 0 #ffd700;
}
</style>
