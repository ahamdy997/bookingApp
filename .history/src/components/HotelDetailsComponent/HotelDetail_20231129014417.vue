<template>
  <div class="w-86 flex">
    <the-logo></the-logo>
    <the-links></the-links>
    <main class="w-86 mx-auto">
      <!--first section for imgs-->
      <section class="h-[500px] bg-color-secondary gap-5">
        <div class="flex w-full items-center">
          <div class="w-[67%] h-[452px] mt-[48px] mr-[20px]">
            <figure>
              <img
                src="@/assets/hotel-detail-images/Big-pic.png"
                alt="hotel-image"
                class="w-full h-[452px] mr-5"
                max-width="820"
                height="452"
              />
            </figure>
          </div>

          <div class="w-[33%] mt-[48px]">
            <figure>
              <img
                src="@/assets/hotel-detail-images/secondpic.png"
                alt="hotel image"
                width="400"
                height="218"
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
    </main>
  </div>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import TheLinks from "../TheNavbar/NavbarLinks.vue";
</script>

<style lang="scss" scoped></style>
