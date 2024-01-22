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
          <div>
            <h2>Lakeside Motel Warefront</h2>
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
