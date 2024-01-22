<template>
  <div class="w-86 m-auto text-3xl font-semibold">
    <h2 class="my-16">Get inspiration for your next trip</h2>
    <ul class="flex justify-between h-72 gap-5 w-full mb-16">
      <li class="bg-no-repeat sydeny flex justify-end flex-col">
        <h3 class="font-semibold text-xl mx-5">
          Sydeny’s 10 most fashionable 5 star hotels
        </h3>
        <p class="text-base font-semibold m-5 mt-2.5 font-normal">
          Browse the fastest growing tourism sector in the heart of Australia
          tourism capital ....
        </p>
      </li>

      <li class="bg-no-repeat sydeny flex justify-end flex-col">
        <h3 class="font-semibold text-xl mx-5">
          Top cities for Vegan Travellers
        </h3>
        <p class="text-base m-5 mt-2.5 font-normal">
          Top sites where you do not have to worry about being a vegan. Our
          tourist guide is here...
        </p>
      </li>

      <li class="bg-no-repeat sydeny flex justify-end flex-col">
        <h3 class="font-semibold text-xl mx-5 font-normal">
          World’s top destinations during and post covid timeline
        </h3>
        <p class="text-base m-5 mt-2.5 font-normal">
          Pandemic is still intact and will be here for a longer time. Here’s
          where your next destination...
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.sydeny {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/next-trip-images/top-destiniation.jpeg"), lightgray 50%;
  background-size: cover;
}
.rest {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/next-trip-images/resuranat.jpeg"), lightgray 50%;
}
h3,
p {
  color: #fff;
}
</style>
