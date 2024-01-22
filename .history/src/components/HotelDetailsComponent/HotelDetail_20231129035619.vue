<template>
  <div>
    <main class="w-86 mx-auto bg-[#efefef]">
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
    <AvailableRooms />
  </div>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import TheLinks from "../TheNavbar/NavbarLinks.vue";
import { ref } from "vue";
import OverviewComponent from "./OverviewComponent.vue";
import AvailableRooms from "./AvailableRooms.vue";
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
