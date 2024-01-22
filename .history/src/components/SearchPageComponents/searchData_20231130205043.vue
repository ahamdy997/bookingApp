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
        class="text-start flex items-center justify-end w-[25%] border rounded-md h-[60px] cursor-pointer"
        @click="ShowSortBy"
      >
        <div class="w-[190px]">
          <span class="text-[#828282]">Sort By</span
          ><input type="text" v-model="sortByOptions" class="outline-none" />
        </div>
        <img
          src="../../assets/Form-Svg/arrow-down 1.svg"
          :class="{ flipArrow: arr }"
          class="ar mr-1"
          width="20"
          height="20"
          alt="arrow"
        />
      </div>
      <ul
        class="text-black absolute w-[220px] right-0 flex flex-col gap-3 rounded-lg shadow-md pt-2 px-1 top-[60px] cursor-pointer bg-[#f2f2f2]"
        v-show="show"
        @click="arr = !arr"
      >
        <li @click="CallSortBy('Entire homes & apartments first', 'upsort_bh')">
          Entire homes & apartments first
        </li>
        <li @click="CallSortBy('Popularity', 'popularity')">Popularity</li>
        <li @click="CallSortBy('Distance from city centre', 'distance')">
          Distance from city centre
        </li>
        <li
          @click="
            CallSortBy('Distance from city centre', 'closest_beach_distance')
          "
        >
          Distance from closest beach
        </li>
        <li
          @click="CallSortBy('Star rating (highest first)', 'class_descending')"
        >
          Star rating (highest first)
        </li>
        <li
          @click="CallSortBy('Star rating (lowest first)', 'class_ascending')"
        >
          Star rating (lowest first)
        </li>
        <li
          @click="CallSortBy(' Best reviewed first', 'bayesian_review_score')"
        >
          Best reviewed first
        </li>
        <li @click="CallSortBy(' Price (lowest first)', 'price')">
          Price (lowest first)
        </li>
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
                      data.property.reviewScore,
                      data.property.reviewCount
                    )
                  "
                >
                  See Availability
                </button>
              </div>
              <div class="ms-auto text-end">
                <p
                  v-if="
                    data.property.priceBreakdown?.strikethroughPrice?.value !=
                    undefined
                  "
                  class="text-white bg-[#EB5757] text-[13px] py-1 px-2 rounded-md"
                >
                  Book now and receive
                  {{
                    Math.round(
                      (((Number(
                        data.property.priceBreakdown.strikethroughPrice.value
                      ) *
                        100 -
                        Number(data.property.priceBreakdown.grossPrice.value) *
                          100) /
                        Number(
                          data.property.priceBreakdown.strikethroughPrice.value
                        )) *
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
import { ref } from "vue";
import CallAPi from "../APIFunction/SearchByBudget";
import getHotelData from "../APIFunction/GetHotelDetails";
import getHotelDescriptionOverView from "../APIFunction/GetHotelDescription";
import router from "@/router";

// redirect home after log in still missing login auth

const dataStore = useAPIData();
const useDataAlive = keepDataAlive();

const show = ref(false);
const arr = ref(false);

const ShowSortBy = function () {
  show.value = !show.value;
  arr.value = !arr.value;
};

//////// Showing Rating in Stars/////////////////////////////////////
const stars = (data) => {
  return Number(
    data % 2 == 0
      ? Math.round(+data * 10) / 2 / 10
      : Math.round((+data * 10 + 1) / 10) / 2
  );
};

const getHotelDescription = function (id, rS, rC) {
  router.push("/hoteldetails");

  getHotelData(id);
  getHotelDescriptionOverView(id);
  dataStore.reviewScore = rS;
  dataStore.reviewCount = rC;
  dataStore.hotelID = id;
  console.log(rS);
};

const sortByOptions = ref("Recommended");
const CallSortBy = function (name, id) {
  show.value = false;
  sortByOptions.value = name;
  CallAPi("", "", id);
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

.flipArrow {
  transform: rotate(180deg);
}
.ar,
ul {
  transition: all 0.25s;
}
</style>
