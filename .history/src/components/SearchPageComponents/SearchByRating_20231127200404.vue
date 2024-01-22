<template>
  <div class="mt-5">
    <div class="content mt-5 rounded-md overflow-hidden">
      <h2 class="font-medium p-4">Rating</h2>

      <div class="enterBudget">
        <div
          class="setBudget flex justify-between items-center mt-5 mb-4 ml-4 text-sm"
        >
          <p>Show only Ratings more than</p>

          <div class="rating flex">
            <div v-for="n in 5">{{ n }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
