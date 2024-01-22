<template>
  <footer>
    <div class="w-86 m-auto mt-20 flex gap-20">
      <div class="logo w-1/5">
        <the-logo />
        <p class="text-sm ml-6">Your next goto companion for travel</p>
      </div>
      <div class="w-1/5">
        <h2 class="font-medium mb-5">Company</h2>
        <ul>
          <li><a>About</a></li>
          <li><a>Jobs</a></li>
          <li><a>Newsroom</a></li>
          <li><a>Advertising</a></li>
          <li><a>Contact us</a></li>
        </ul>
      </div>
      <div class="w-1/5">
        <h2 class="font-medium mb-5">Explore</h2>
        <ul>
          <li><a>Australia</a></li>
          <li><a>New Zealand</a></li>
          <li><a>United States America (USA)</a></li>
          <li><a>Greece</a></li>
          <li><a>Maldives</a></li>
          <li><a>Singapore</a></li>
          <li><a class="main-blue">See more</a></li>
        </ul>
      </div>
      <div class="w-1/5">
        <h2 class="font-medium mb-5">Terms and Policies</h2>
        <ul>
          <li><a>Privacy Policy </a></li>
          <li><a>Terms of use</a></li>
          <li><a>Acessibility</a></li>
          <li><a>Reward system policy</a></li>
        </ul>
      </div>
      <div class="w-1/5">
        <h2 class="font-medium mb-5 text-black">Help</h2>
        <ul>
          <li><a>Support</a></li>
          <li><a>Cancel your bookings </a></li>
          <li><a>Use Coupon</a></li>
          <li><a>Refund Policies</a></li>
          <li><a>International Travel Documents</a></li>
        </ul>
      </div>
    </div>
    <footer-copyright />
  </footer>
</template>

<script setup>
//import logo
import TheLogo from "@/components/TheNavbar/TheLogo.vue";
import FooterCopyright from "../TheFooter/footer-copyright";
</script>

<style scoped>
a,
p {
  color: #4f4f4f;
}
.main-blue {
  color: var(--mainBlue);
}
</style>
