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
            <a href="#" class="px-2 border-b-2 p-3">Overview</a>
          </li>
          <li>
            <a href="#section2" class="px-2">Rooms</a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import TheLinks from "../TheNavbar/NavbarLinks.vue";
</script>

<style scoped>
.active {
  border-bottom: 1px solid var(--mainBlue);
}
</style>
