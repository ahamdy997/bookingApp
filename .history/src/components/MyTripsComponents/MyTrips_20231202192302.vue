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
