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
        <ul class="flex text-par">
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

    <section class="mt-0 bg-[#E0E0E0]">
      <div class="bg-color-secondary mt-2 w-86 mx-auto" style="height: 700px">
        <div class="inner_div flex w-full justify-between">
          <div class="one mt-9">
            <h2 class="font-bold text-2xl">Lakeside Motel Warefront</h2>
            <ul class="flex">
              <li><img src="" class="w-5" /></li>
              <li><img src="" class="w-5" /></li>
              <li><img src="" class="w-5" /></li>
              <li><img src="" class="w-5" /></li>
              <li><img src="" class="w-2.5" /></li>
              <li class="text-sm px-2"><span>4.5 (1200 Reviews)</span></li>
            </ul>
            <p class="flex mt-8 text-sm">
              <span
                ><img
                  src="src/assets/images/availableRooms/location 1.svg"
                  class="w-5"
              /></span>
              Lorem ipsum road, Tantruim-2322, Melbourne, Australia
            </p>
            <div class="overview bg-white mt-5 h-100 rounded-lg">
              <h3 class="font-bold text-lg p-5">OverView</h3>
              <p class="p-5 text-base border-b-2 border-color-secondary">
                Featuring free WiFi throughout the property, Lakeside Motel
                Waterfront offers accommodations in Lakes Entrance, 19 mi from
                Bairnsdale. Free private parking is available on site.<br />
                <br />Each room at this motel is air conditioned and comes with
                a flat-screen TV. You will find a kettle, toaster and a
                microwave in the room. Each room is fitted with a private
                bathroom. Guests have access to barbecue facilities and a lovely
                large lawn area. Metung is 6.8 mi from Lakeside Motel
                Waterfront, while Paynesville is 14 mi from the property.<br /><br />
                Couples in particular like the location – they rated it 9.2 for
                a two-person trip.
              </p>

              <h3 class="font-bold text-lg p-5">Top facilities</h3>
              <div class="flex justify-between w-1/2 pl-5 pb-9">
                <ul class="text-sm">
                  <li class="flex pt-1">
                    <img
                      src="src/assets/images/availableRooms/home-wifi 1.svg"
                      class="w-5"
                    /><span class="pl-3">Free wifi</span>
                  </li>
                  <li class="flex pt-2">
                    <img
                      src="src/assets/images/availableRooms/wind 1.svg"
                      class="w-5"
                    /><span class="pl-3">Air Conditioning</span>
                  </li>
                  <li class="flex pt-2">
                    <img
                      src="src/assets/images/availableRooms/car 1.svg"
                      class="w-5"
                    /><span class="pl-3">Parking available</span>
                  </li>
                </ul>
                <ul class="text-sm">
                  <li class="flex pt-1">
                    <img
                      src="src/assets/images/availableRooms/bag-tick-2 1.svg"
                      class="w-5"
                    /><span class="pl-3">Business Services</span>
                  </li>
                  <li class="flex pt-2">
                    <img
                      src="src/assets/images/availableRooms/lifebuoy 1.svg"
                      class="w-5"
                    /><span class="pl-3">Swimming pool</span>
                  </li>
                  <li class="flex pt-2">
                    <img
                      src="src/assets/images/availableRooms/like-1 1.svg"
                      class="w-5"
                    /><span class="pl-3">Top rated in area</span>
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
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <h3 class="font-bold text-lg p-5">Explore the area</h3>
            <div class="flex justify-between pl-5 pb-9 text-para">
              <ul class="text-sm">
                <li class="flex pt-1">
                  <i class="fa-solid fa-plane-departure"></i>
                  <span class="pl-3">Hotel Penselvenyia</span>
                </li>
                <li class="flex pt-2">
                  <i class="fa-solid fa-location-pin"></i
                  ><span class="pl-3">Travis Bakery store house</span>
                </li>
                <li class="flex pt-2">
                  <i class="fa-solid fa-location-pin"></i
                  ><span class="pl-3">Olivia Johnson Garden</span>
                </li>
                <li class="flex pt-2">
                  <i class="fa-solid fa-location-pin"></i
                  ><span class="pl-3">Norman Opera Circus</span>
                </li>
                <li class="flex pt-2">
                  <i class="fa-solid fa-location-pin"></i
                  ><span class="pl-3">Rockdeset hotel</span>
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
  </div>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import TheLinks from "../TheNavbar/NavbarLinks.vue";
import { ref } from "vue";
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
