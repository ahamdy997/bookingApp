<template>
  <div
    class="header-content mx-auto w-86 flex items-center justify-center text-white"
  >
    <transition>
      <teleport to="body">
        <transition name="modal">
          <base-dialog v-if="inputsAreInvalid" @close="closeDialog">
            <template v-slot:default>
              <div
                class="p-5 flex rounded-[10px] justify-center flex-col items-center im m-auto w-[240px] bg-[rgba(111, 207, 151, 0.20)]"
              >
                <div class="flex fix justify-center gap-0 rounded-[100px]">
                  <img
                    src="../../../assets/home-images/Framewelcome1.svg"
                    alt="successful"
                  />
                  <img
                    src="../../../assets/home-images/Framewelcome2.svg"
                    alt="successful"
                  />
                </div>
              </div>
              <h2 class="mt-[45px] text-[20px] text-center font-semibold">
                Welcome to My Dream Place
              </h2>
              <div class="mt-3 flex justify-center">
                <p class="c">
                  You can now enjoy your travel experience with easy access to
                  resources and more
                </p>
              </div>
            </template>

            <template v-slot:actions>
              <button
                @click="closeDialog"
                class="px-3 py-2.5 text-white bg-[var(--mainBlue)] w-full rounded-[6px] search"
              >
                Get Started
              </button>
            </template>
          </base-dialog>
        </transition>
      </teleport>
    </transition>

    <div class="content flex items-center flex-col">
      <h2 class="text-4xl my-5 font-bold">Enjoy Your Dream Vacation</h2>
      <p class="text-xl">
        Plan and book our perfect trip with expert advice, travel tips,
        destination
      </p>
      <p class="text-xl">information and inspiration from us</p>
    </div>
  </div>

  <div
    class="shadow-2xl search rounded-lg w-[77%] h-16 bg-white m-auto -translate-y-1/2"
  >
    <keep-alive>
      <SearchForm />
    </keep-alive>
  </div>
</template>

<script setup>
import SearchForm from "./HeaderSearchForm.vue";
import { onMounted, ref } from "vue";

//////////////////////// Show Welcome  Modal  //////////////////////////////
const inputsAreInvalid = ref(false);
const closeDialog = function () {
  inputsAreInvalid.value = false;
};
// onMounted(() => {
///////////////////////////Check User Is Valid before welcome /////////////////////////////////

const checkExp = function () {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${year}${month}${day}${hour}${minutes}`;
};
// check on mounted for exp date
if (
  !localStorage.getItem("user") ||
  +checkExp() - +JSON.parse(localStorage.getItem("user")).date > 100
) {
  localStorage.removeItem("user");
} else
  setTimeout(() => {
    inputsAreInvalid.value = true;
  }, 500);
// });
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.header-content {
  border-radius: 10px;
}
.header-content {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("../../../assets/home-images/f05ea716209b4ede5a3107407feb60d4.jpeg");
  background-size: cover;
  background-position: 0% 27%;
  height: 500px;
}

.fix {
  background-color: rgba(47, 128, 237, 0.3) !important;
  width: 240px;
}
.c {
  text-align: center !important;
}
</style>
