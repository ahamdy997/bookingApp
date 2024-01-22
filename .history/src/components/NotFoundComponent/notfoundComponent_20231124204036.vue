<template>
  <section class="flex items-center justify-center h-full">
    <base-card
      class="w-[400px] h-[300px] flex items-center justify-center bg-red-300"
    >
      <div class="flex items-center flex-col">
        <h2 class="font-bold text-2xl">Page not found</h2>
        <p>
          This page couldn't be found
          <router-link class="text-[var(--mainBlue)] font-semibold" to="/"
            >Go Back Home</router-link
          >
        </p>
      </div>
    </base-card>
  </section>
</template>

<script setup></script>
