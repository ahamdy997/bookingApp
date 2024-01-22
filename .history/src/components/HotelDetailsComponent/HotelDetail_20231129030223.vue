<template>
  <div>
    <main class="w-86 mx-auto">
      <div class="h-[68px] items-center flex justify-between">
        <the-logo></the-logo>
        <the-links></the-links>
      </div>
      <!--first section for imgs-->
      <section class="h-full bg-color-secondary mt-[24px]">
        <div class="flex w-full justify-between items-center">
          <div class="w-[67%] h-[452px]">
            <figure>
              <img
                src="@/assets/hotel-detail-images/Big-pic.png"
                alt="hotel-image"
                class="w-full h-[452px]"
                max-width="820"
                height="452"
              />
            </figure>
          </div>

          <div class="w-[400px]">
            <figure>
              <img
                src="@/assets/hotel-detail-images/secondpic.png"
                alt="hotel image"
                width="400"
                height="218"
                class="w-[100%]"
              />
            </figure>

            <figure>
              <img
                src="@/assets/hotel-detail-images/thirdPic.png"
                alt="hotel image"
                class="mt-[16px]"
                width="400"
                height="218"
              />
            </figure>
          </div>
        </div>
      </section>

      <div class="mt-6">
        <ul class="flex">
          <li>
            <a
              href="#"
              class="py-2.5 px-[14px]"
              @click="handleBorder(1)"
              :class="{ active: OverviewBorder }"
              >Overview</a
            >
          </li>
          <li>
            <a
              href="#section2"
              class="py-2.5 px-[14px]"
              @click="handleBorder(2)"
              :class="{ active: RoomsBorder }"
              >Rooms</a
            >
          </li>
        </ul>
      </div>
    </main>
    <hr class="mt-2" />
    <OverviewComponent />
    <section
      class="bg-color-secondary pb-5"
      style="height: 700px: scroll"
      id="section2"
    >
      <div class="con-rooms m-auto pb-9">
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
  </div>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import TheLinks from "../TheNavbar/NavbarLinks.vue";
import { ref } from "vue";
import OverviewComponent from "./OverviewComponent.vue";
const OverviewBorder = ref(true);
const RoomsBorder = ref(false);

const handleBorder = function (name) {
  if (name === 1) {
    OverviewBorder.value = true;
    RoomsBorder.value = false;
  } else {
    OverviewBorder.value = false;
    RoomsBorder.value = true;
  }
};
</script>

<style scoped>
.active {
  border-bottom: 3px solid var(--mainBlue);
}
</style>
