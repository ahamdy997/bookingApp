<template>
  <aside class="mt-5 w-86 m-auto">
    <h2 class="text-d ml-4 font-semibold">Filter by</h2>

    <div class="content mt-5 w-1/5 rounded-md overflow-hidden">
      <h2 class="font-medium p-4">Your budget per day</h2>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center gap-2">
          <input type="checkbox" name="" class="ml-4" id="low" />
          <label for="low" class="text-sm">$ 0 - $ 200</label>
        </div>
        <h2 class="mr-4 text-sm">200</h2>
      </div>
    </div>
  </aside>
</template>

<script setup>
const filterData = [
  {
    label: "$ 0 - $ 200",
    number: "200",
  },
  {
    label: "$ 200 - $ 500",
    number: "100",
  },
  {
    label: "$ 500 - $ 1,000",
    number: "15",
  },
  {
    label: "$ 1,000 - $ 2,000",
    number: "12",
  },
  {
    label: "$ 500 - $ 1,000",
    number: "15",
  },
];
</script>

<style scoped>
.content,
.font-medium {
  border: 1px solid #e0e0e0;
}
.font-medium {
  background-color: rgba(242, 242, 242, 1);
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
</style>
