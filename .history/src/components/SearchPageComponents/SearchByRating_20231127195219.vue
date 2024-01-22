<template>
  <div class="flex items-center">
    <aside class="w-[295px] m-auto mt-16">
      <div class="rounded-md overflow-hidden container">
        <h2 class="ml-4 mt-5 p-0.5 font-medium">Search by property name</h2>
        <div
          class="flex justify-center rounded items-center bg-white inp gap-2.5 mt-4 mb-5"
        >
          <label for="search">
            <figure>
              <img
                src="../../assets/Search--page-images/search.svg"
                alt="search icon"
              />
            </figure>
          </label>
          <input
            class="h-10 rounded outline-none"
            type="text"
            id="search"
            placeholder="eg. Beach westpalm"
            v-model="hotelNameSearch"
            @click="storeData"
            @input="searchResults"
            @keydown="whiteoutInput"
          />
        </div>
      </div>
    </aside>
  </div>
</template>
