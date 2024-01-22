<template>
  <section class="bg-[#efefef] pb-5 h-[700px]" id="section2">
    <div class="w-86 m-auto pb-9">
      <h3 class="font-bold text-lg p-5">Available rooms</h3>

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
                <span class="text-ylow">Orlando</span>
              </h2>
            </div>

            <div class="p-4">
              <img
                src="src/assets/images/availableRooms/tourist (1).png"
                alt="img of man"
                class="mt-20"
              />
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="max-w-md card_two bg-white rounded-lg">
          <img :src="cardtwo" alt="cardtwo" />
          <h3 class="font-bold text-lg m-4">
            Standard twin ben, Multiple beds
          </h3>
          <ul class="text-sm ml-4">
            <li class="flex pt-1">
              <img
                src="src/assets/images/availableRooms/bag-tick-2 1.svg"
                class="w-5"
              /><span class="pl-3">300 sq ft</span>
            </li>
            <li class="flex pt-2">
              <img
                src="src/assets/images/availableRooms/lifebuoy 1.svg"
                class="w-5"
              /><span class="pl-3">Sleeps 3</span>
            </li>
            <li class="flex pt-2">
              <img
                src="src/assets/images/availableRooms/like-1 1.svg"
                class="w-5"
              /><span class="pl-3">1 double bed and 1 twin bed</span>
            </li>
          </ul>
          <div class="text-center mt-9">
            <button
              class="bg-color-primary rounded font-sm text-white py-1.5 px-4 md:mt-0 mt-3 w-11/12 btn"
            >
              Reserve suite
            </button>
          </div>
        </div>
        <!-- card 3 -->
        <div class="max-w-md card_two bg-white rounded-lg">
          <img :src="cardthree" alt="cardthree" />
          <h3 class="font-bold text-lg m-4">
            Standard twin ben, Multiple beds
          </h3>
          <ul class="text-sm ml-4">
            <li class="flex pt-1">
              <img
                src="src/assets/images/availableRooms/bag-tick-2 1.svg"
                class="w-5"
              /><span class="pl-3">300 sq ft</span>
            </li>
            <li class="flex pt-2">
              <img
                src="src/assets/images/availableRooms/lifebuoy 1.svg"
                class="w-5"
              /><span class="pl-3">Sleeps 3</span>
            </li>
            <li class="flex pt-2">
              <img
                src="src/assets/images/availableRooms/like-1 1.svg"
                class="w-5"
              /><span class="pl-3">1 double bed and 1 twin bed</span>
            </li>
          </ul>
          <div class="text-center mt-9">
            <button
              class="bg-color-primary rounded font-sm text-white py-1.5 px-4 md:mt-0 mt-3 w-11/12 btn"
            >
              Reserve suite
            </button>
          </div>
        </div>
      </div>
      <!-- warning section -->
      <!-- <WarningSec></WarningSec> -->
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
