<template>
  <aside class="mt-5 w-86 m-auto">
    <h2 class="text-d ml-4 font-semibold">Filter by</h2>

    <div class="content mt-5 w-1/5 rounded-md overflow-hidden">
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
      <div
        class="setBudget flex justify-between items-center mt-4 ml-4 text-sm"
      >
        <label for=""> Set your own budget </label>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
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
    label: "$ 2,000 - $ 5,000",
    number: "230",
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

.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
