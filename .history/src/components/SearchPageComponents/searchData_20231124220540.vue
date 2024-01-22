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
        <div class="flex items-center h-full mx-5">
          <figure class="mr-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square60/506126867.jpg?k=79fee23a8d75252a467ffea705b92aa9c2fbed2030ba1644a4be1ca3b473c86a&o="
              alt="hotel picture"
              width="285"
              height="200"
              class="h-[200px]"
            />
          </figure>
          <div class="content">
            <h2 class="font-semibold text-2xl">Julia Dens Resort</h2>
            <div class="description">
              <div class="rating flex">
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
              </div>
              <h3>Live a little and celbrate with champagne</h3>
              <p></p>
            </div>
            <p></p>
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
