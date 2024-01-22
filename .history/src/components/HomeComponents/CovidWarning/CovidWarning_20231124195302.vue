<template>
  <div class="w-86 mx-auto covid flex items-center rounded-lg mt-[50px]">
    <figure>
      <img
        src="@/assets/covid-warning-image/danger 1.svg"
        class="ml-16"
        width="32"
        height="32"
        alt="danger warning"
      />
    </figure>
    <p class="mx-5 my-6 text-[16px]">
      Check the latest COVID-19 restrictions before you travel.
      <a href="#">Learn more</a>
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.covid {
  background: #fcefca;
}
a {
  color: var(--mainBlue);
}
</style>
