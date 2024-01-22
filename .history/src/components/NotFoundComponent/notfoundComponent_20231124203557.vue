<template>
  <section class="flex items-center justify-center h-full">
    <base-card class="w-[400px] flex flex-col items-center gap-3 h-[300px]">
      <h2 class="font-bold text-2xl">Page not found</h2>
      <p>
        This page couldn't be found
        <router-link class="text-[var(--mainBlue)] font-semibold" to="/"
          >Go Back Home</router-link
        >
      </p>
    </base-card>
  </section>
</template>

<script setup></script>
