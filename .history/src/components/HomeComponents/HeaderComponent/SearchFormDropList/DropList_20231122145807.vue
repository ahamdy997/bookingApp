<template>
  <div class="w-40"></div>
</template>

<script setup>
import { ref } from "vue";

// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const people = [
  { name: "Cairo" },
  { name: "Giza" },
  { name: "Aswan" },
  { name: "Luxor" },
];
const selectedPerson = ref(people[0]);
</script>
