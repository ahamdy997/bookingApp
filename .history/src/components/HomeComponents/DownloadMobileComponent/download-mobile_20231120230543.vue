<template>
  <section
    class="w-86 mx-auto mb-12 rounded-lg flex justify-between overflow-hidden items-center"
  >
    <h2>ahmed</h2>
    <figure class="">
      <img
        src="../../../assets/download-mobile-cover-images/user-hand.png"
        alt="mobile app user"
        width="720"
        class="translate-y-0.5"
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

img {
  transform: rotate(-15deg);
  position: relative;
  bottom: -30px;
}
h2 {
  height: 280px;
}
</style>
