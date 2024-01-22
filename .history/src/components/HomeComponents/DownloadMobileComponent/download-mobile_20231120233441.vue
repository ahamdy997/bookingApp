<template>
  <section
    class="w-86 mx-auto mb-12 rounded-lg flex justify-between overflow-hidden items-center"
  >
    <div class="content text-white">
      <h2 class="text-2xl mb-5">
        Download the mobile application for bonus coupons and travel codes
      </h2>
      <button type="button" class="font-medium">Download mobile app</button>
    </div>
    <figure class="">
      <img
        src="../../../assets/download-mobile-cover-images/user-hand.png"
        alt="mobile app user"
        width="720"
        height="516"
        class="relative -bottom-5 right-24"
      />
    </figure>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("../../../assets/download-mobile-cover-images/beach.jpeg"), lightgray;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0;

  height: 280px;
}
h2,
button {
  margin-left: 20%;
}
img {
  transform: rotate(-10deg);
}
</style>
