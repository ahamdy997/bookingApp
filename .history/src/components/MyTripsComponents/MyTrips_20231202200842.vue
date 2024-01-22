<template>
  <div class="flex items-center w-86 m-auto justify-between h-[68px]">
    <the-logo></the-logo>
    <navbar-links></navbar-links>
    <navbar-user></navbar-user>
  </div>

  <section class="bg-[#F4F4F4]">
    <div class="w-86 m-auto">
      <h2 class="text-[32px] font-semibold">My trips</h2>
    </div>
    <ul>
      <li class="border rounded-[5px] mt-10 p-5 w-86 m-auto bg-white">
        <div class="flex gap-6">
          <img
            src="../../assets/hotel-images/lakeside-motel.jpeg"
            alt="hotel"
            class="h-[200px] rounded-[5px]"
            width="285"
            height="200"
          />
          <div class="flex w-[70%]">
            <div>
              <h2 class="text-xl font-medium">Lakeside Motel Warefront</h2>
              <div class="flex">
                <img
                  src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                  alt="star"
                  width="20"
                  height="20"
                />
                <img
                  src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                  alt="star"
                  width="20"
                  height="20"
                />
                <img
                  src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                  alt="star"
                  width="20"
                  height="20"
                />
                <img
                  src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                  alt="star"
                  width="20"
                  height="20"
                />
                <img
                  src="../../assets/Stars-for-Search-page/star-s-fill 5.svg"
                  alt="star"
                />
                <p class="px-3 text-[#4F4F4F]">4.5 (1200 Reviews)</p>
              </div>
              <p class="text-[#EB5757] mt-[40px]">Non refundable</p>
              <p class="text-[#4F4F4F]">Check in: Sunday, March 18, 2022</p>
              <p class="text-[#4F4F4F]">Check out: Tuesday, March 20, 2022</p>
              <p class="text-[#4F4F4F]">2 night stay</p>
            </div>
          </div>

          <div class="flex flex-col justify-center mr-[1000px]">
            <div class="flex items-center gap-2 justify-end">
              <p class="text-[14px] text-[#EB5757] line-through">$150</p>
              <p class="text-[20px]">$130</p>
            </div>
            <p class="text-[#4F4F4F]">Includes taxes and fees</p>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <footer class="bg-[#f4f4f4]">
    <covid-warning class="mt-0"></covid-warning>
    <the-footer></the-footer>
  </footer>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import NavbarLinks from "../TheNavbar/NavbarLinks.vue";
import NavbarUser from "../TheNavbar/NavbarUser.vue";
import CovidWarning from "../HomeComponents/CovidWarning/CovidWarning";
import TheFooter from "../TheFooter/TheFooter.vue";
import FooterCopyright from "../TheFooter/footer-copyright";
</script>

<style scoped></style>
