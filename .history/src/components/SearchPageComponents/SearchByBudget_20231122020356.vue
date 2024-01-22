<template>
  <div class="mt-5">
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
      <div class="flex justify-center items-center inputs gap-9">
        <input type="number" class="w-1/2 p-3" placeholder="Min budget" />
        <input type="number" class="w-1/2 p-3" placeholder="Max budget" />
      </div>
    </div>
  </div>
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

.component-title {
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 30px;
  left: 0;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #888;
  text-align: center;
}

/* The switch - the box around the slider */
.container {
  width: 32px;
  height: 20px;
  position: relative;
}

/* Hide default HTML checkbox */
.checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.switch {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #e9e9eb;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

/* The slider */
.slider {
  width: 15px;
  height: 15px;
  position: absolute;
  left: calc(50% - 14px / 2 - 10px);
  top: calc(50% - 15px / 2);
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.checkbox:checked + .switch {
  background-color: var(--mainBlue);
}

.checkbox:checked + .switch .slider {
  left: calc(50% - 15px / 2 + 10px);
  top: calc(50% - 15px / 2);
}

.inputs {
  border: 1px solid #e0e0e0;
  background: #fff;
}
</style>
