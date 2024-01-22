<template>
  <div class="search-result w-[915px] me-auto">
    <h2 class="font-semibold text-2xl w-[504px]">
      Melbourne : 2,582 search results found
    </h2>
    <ul>
      <!-- <li v-for="data in dataStore.hotelSearchData" :key="data.name">
        {{ data.property.name }}
      </li> -->

      <li class="h-60 border rounded-[5px] mt-10">
        <div class="flex mt-5 h-full mx-5">
          <figure class="mr-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square60/506126867.jpg?k=79fee23a8d75252a467ffea705b92aa9c2fbed2030ba1644a4be1ca3b473c86a&o="
              alt="hotel picture"
              width="285"
              height="200"
              class="h-[200px]"
            />
          </figure>
          <div class="content mr-6">
            <h2 class="font-semibold text-xl">Julia Dens Resort</h2>
            <div class="description">
              <div class="rating mb-[17px] mt-2.5 flex">
                <figure>
                  <img
                    src="@/assets/Stars-for-Search-page/star-s-fill.svg"
                    alt="rating"
                  />
                </figure>
                <figure>
                  <img
                    src="@/assets/Stars-for-Search-page/star-s-fill.svg"
                    alt="rating"
                  />
                </figure>
                <figure>
                  <img
                    src="@/assets/Stars-for-Search-page/star-s-fill.svg"
                    alt="rating"
                  />
                </figure>
                <figure>
                  <img
                    src="@/assets/Stars-for-Search-page/star-s-fill.svg"
                    alt="rating"
                  />
                </figure>
                <figure>
                  <img
                    src="@/assets/Stars-for-Search-page/star-s-fill 5.svg"
                    alt="rating"
                  />
                </figure>
                <p class="text-sm text-[#4f4f4f] ml-[12px]">
                  4.5 (1200 Reviews)
                </p>
              </div>
              <h3 class="text-[13px] text-[#4f4f4f] font-medium mb-1">
                Live a little and celbrate with champagne
              </h3>
              <p class="max-w-[380px] mb-[18px] text-[13px] text-[#4f4f4f]">
                Reats include a glass of French champagne, parking and a late
                <br />
                checkout. Gym included. Flexible cancellation applies
              </p>
              <button
                type="button"
                class="text-white bg-[var(--mainBlue)] py-2.5 px-[18px] rounded-md"
              >
                See Availability
              </button>
            </div>
            <p></p>
          </div>
          <div class="ms-auto text-end">
            <p class="text-white bg-[#EB5757] text-[13px] py-1 px-2 rounded-md">
              Book now and receive 15% off
            </p>
            <p
              class="mt-16 ms-auto py-1 px-2 text-[13px] bg-[#219653] text-white rounded-md w-fit"
            >
              5% off
            </p>
            <div
              class="price mt-[29px] flex justify-end gap-2 items-center flex-wrap"
            >
              <p class="text-sm text-[#EB5757] line-through">$130</p>
              <p class="text-xl">$130</p>
            </div>
            <p class="mt-[6px] text-[#4f4f4f] text-sm font-light">
              Includes taxes and fees
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { useAPIData } from "@/stores/APIDataStore.js";
// const dataStore = useAPIData();
// console.log(dataStore.hotelSearchData);
</script>

<style scoped></style>
