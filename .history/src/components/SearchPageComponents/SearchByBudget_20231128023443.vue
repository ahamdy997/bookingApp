<template>
  <div class="mt-5">
    <h2 class="text-d ml-4 font-semibold">Filter by</h2>

    <div class="content mt-5 rounded-md overflow-hidden">
      <h2 class="font-medium p-4">Your budget per day</h2>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="modelfor0"
            @change="getAPIFilteredData(0, 200)"
            class="ml-4"
            id="0-200"
          />
          <label for="0-200" class="text-sm">$ 0 - $ 200</label>
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="modelfor200"
            @change="getAPIFilteredData(200, 500)"
            class="ml-4"
            id="200-500"
          />
          <label for="200-500" class="text-sm">$ 200 - $ 500</label>
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="modelfor500"
            @change="getAPIFilteredData(500, 1000)"
            class="ml-4"
            id="500-1000"
          />
          <label for="500-1000" class="text-sm"> $ 500 - $ 1,000</label>
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="modelfor1000"
            @click="getAPIFilteredData(1000, 2000)"
            class="ml-4"
            id="1000-2000"
          />
          <label for="1000-2000" class="text-sm">$ 1,000 - $ 2,000 </label>
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="modelfor2000"
            @change="console.log(modelfor2000)"
            class="ml-4"
            :id="label"
          />
          <label :for="label" class="text-sm"> $ 2,000 - $ 5,000 </label>
        </div>
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

<script setup>
import { ref } from "vue";

const modelfor0 = ref(false);
const modelfor200 = ref(false);
const modelfor500 = ref(false);
const modelfor1000 = ref(false);
const modelfor2000 = ref(false);
getAPIFilteredData = () => {};
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
