<template>
  <div class="flex gap-6 items-center">
    <figure>
      <img :src="logoSrc" alt="notification bell" width="24" height="24" />
    </figure>
    <figure>
      <img
        src="@/assets/header-logo/user.svg"
        width="44"
        height="44"
        alt="user picture"
        @click="ShowUL"
      />
    </figure>
    <ul
      class="text-black absolute w-[220px] right-0 flex flex-col gap-3 rounded-lg shadow-md pt-2 px-1 top-[60px] cursor-pointer bg-[#f2f2f2]"
      v-show="show"
      @click="arr = !arr"
    >
      <li class="flex items-center gap-1 ml-2">
        <figure>
          <img src="../../assets/user-drop-down/user-square 2.svg" alt="" />
        </figure>
        Manage account
      </li>
      <li class="flex items-center gap-1 ml-2">
        <figure>
          <img src="../../assets/user-drop-down/user-square 2.svg" alt="" />
        </figure>
        My trips
      </li>
      <li>Reward and wallet</li>
      <li>Sign out</li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const logoSrc = ref("");
const route = useRoute();

onBeforeMount(() => {
  if (route.fullPath === "/search")
    logoSrc.value = require("@/assets/header-logo/notification.svg");
  else logoSrc.value = require("@/assets/header-logo/notification2.svg");
  console.log(route.fullPath);
});

const show = ref(false);
const arr = ref(false);

const ShowUL = function () {
  show.value = !show.value;
  arr.value = !arr.value;
};
</script>

<style scoped></style>
