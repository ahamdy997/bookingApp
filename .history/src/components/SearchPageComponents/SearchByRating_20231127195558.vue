<template>
  <div class="mt-5">
    <h2 class="text-d ml-4 font-semibold">Filter by</h2>

    <div class="content mt-5 rounded-md overflow-hidden">
      <h2 class="font-medium p-4">Your budget per day</h2>

      <div
        class="flex justify-between items-center mt-4"
        v-for="data in filterData"
        :key="data.label"
      >
        <div class="flex items-center gap-2">
          <input type="checkbox" name="" class="ml-4" id="low" />
          <label for="low" class="text-sm">{{ data.label }}</label>
        </div>
        <h2 class="mr-4 text-sm">{{ data.number }}</h2>
      </div>
      <div class="enterBudget">
        <div
          class="setBudget flex justify-between items-center mt-5 mb-4 ml-4 text-sm"
        >
          <p>Set your own budget</p>
          <div class="container mr-4">
            <input type="checkbox" class="checkbox" id="checkbox" />
            <label class="switch" for="checkbox">
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mb-5 gap-9">
        <input
          type="text"
          class="w-1/2 p-3 ml-5 inputs outline-none text-xs"
          placeholder="Min budget"
        />
        <input
          type="text"
          class="w-1/2 p-3 mr-5 inputs outline-none text-xs"
          placeholder="Max budget"
        />
      </div>
    </div>
  </div>
</template>
