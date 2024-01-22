<template>
  <section class="w-86 m-auto my-12">
    <header class="my-8">
      <h2 class="text-3xl my-4 font-semibold">Popular hotels</h2>
      <p class="w-3/6">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
    </header>
    <article>
      <ul class="flex gap-5 items-center">
        <li class="w-3/12" v-for="data in countryData" :key="data.countryName">
          <img
            :src="data.imageSrc"
            class="rounded-lg"
            max-width="294"
            height="220"
            :alt="data.countryName"
          />
          <figcaption class="mt-4 text-xl font-bold">
            {{ data.countryName }}
          </figcaption>
          <p>{{ data.properties }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
