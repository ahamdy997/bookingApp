<template>
  <div
    v-if="dataStore.hotelSearchData.length > 0"
    class="search-result w-[915px] me-auto mb-[60px] mt-[50px]"
  >
    <div class="flex w-full justify-between relative items-center">
      <h2 class="font-semibold text-2xl w-[504px]">
        {{ useDataAlive.searchQuery }} :
        {{ parseInt(dataStore.metaData[0].title) }} search results found
      </h2>
      <div
        type="text"
        id="browser"
        placeholder="Where are you going?"
        class="text-center flex justify-end w-[50%]"
        @click="ShowSortBy"
      >
        <p class="text-[#828282] w-[190px] border">Sort By</p>
      </div>
      <ul
        class="text-black absolute w-[220px] right-0 flex flex-col gap-3 rounded-lg shadow-md pt-2 px-1 top-[45px] bg-[#f2f2f2]"
        v-show="show"
      >
        <li>Entire homes & apartments first</li>
        <li>Popularity</li>
        <li>Distance from city centre</li>
        <li>Distance from closest beach</li>
        <li>Star rating (highest first)</li>
        <li>Star rating (lowest first)</li>
        <li>Best reviewed first</li>
        <li>Price (lowest first)</li>
      </ul>
    </div>
    <transition mode="out-in" data-vue-meta="ignore">
      <ul>
        <transition-group mode="out-in" data-vue-meta="ignore">
          <li
            v-for="data in dataStore.paginatedItems"
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
                  <div class="flex">
                    <div v-for="n in 5" :key="n">
                      <span v-if="n <= stars(data.property.reviewScore)"
                        ><figure>
                          <img
                            src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                            alt="stars rating"
                          /></figure
                      ></span>
                      <span
                        v-else-if="n - 0.5 === stars(data.property.reviewScore)"
                        ><figure>
                          <img
                            src="../../assets/Stars-for-Search-page/star-s-fill 5.svg"
                            alt="stars rating"
                          /></figure
                      ></span>
                    </div>
                  </div>

                  <p class="text-sm text-[#4f4f4f] ml-[12px]">
                    {{
                      +data.property.reviewScore % 2 == 0
                        ? Math.round(+data.property.reviewScore * 10) / 2 / 10
                        : Math.round(
                            (+data.property.reviewScore * 10 + 1) / 10
                          ) / 2
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
                  @click="
                    getHotelDescription(
                      data.property.id,
                      data.property.reviewScore
                    )
                  "
                >
                  See Availability
                </button>
              </div>
              <div class="ms-auto text-end">
                <p
                  v-if="
                    data.property.priceBreakdown?.excludedPrice?.value !=
                    undefined
                  "
                  class="text-white bg-[#EB5757] text-[13px] py-1 px-2 rounded-md"
                >
                  Book now and receive
                  {{
                    Math.round(
                      (((Number(
                        data.property.priceBreakdown.excludedPrice.value
                      ) *
                        100) /
                        Number(data.property.priceBreakdown.grossPrice.value)) *
                        100) /
                        100
                    )
                  }}% off
                </p>

                <p
                  class="mt-16 ms-auto py-1 px-2 text-[13px] bg-[#219653] text-white rounded-md w-fit"
                  v-if="data.property.priceBreakdown?.excludedPrice?.value"
                >
                  {{
                    Math.round(
                      (Number(
                        data.property.priceBreakdown.excludedPrice.value
                      ) *
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
                    $
                    {{
                      data.property.priceBreakdown.grossPrice.value.toFixed(2)
                    }}
                  </p>
                  <p
                    class="text-xl"
                    v-if="data.property.priceBreakdown?.excludedPrice?.value"
                  >
                    $
                    {{
                      data.property.priceBreakdown.excludedPrice.value.toFixed(
                        2
                      )
                    }}
                  </p>
                </div>
                <p class="mt-[6px] text-[rgba(97,97,97,1)] text-sm font-light">
                  Includes taxes and fees
                </p>
              </div>
            </div>
          </li>
        </transition-group>
      </ul>
    </transition>
  </div>
  <div class="search-result w-[915px] me-auto mt-[50px]" v-else>
    <p class="text-[20px] text-red-700 font-semibold">
      No Matched Results Found, Please Try Again With Different Inputs...
    </p>
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
import { keepDataAlive } from "@/stores/KeepingDataAlive";
const dataStore = useAPIData();
const useDataAlive = keepDataAlive();
const show = ref(false);
const ShowSortBy = function () {
  show.value = !show.value;
};

//////// Showing Rating in Stars/////////////////////////////////////
const stars = (data) => {
  return Number(
    data % 2 == 0
      ? Math.round(+data * 10) / 2 / 10
      : Math.round((+data * 10 + 1) / 10) / 2
  );
};

const getHotelDescription = function (id, rS) {
  console.log(id, rS);
};
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.v-enter-active {
  transition: all 0.4s ease-out;
}
.v-leave-active {
  transition: all 0.4s ease-in;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
</style>
