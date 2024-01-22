<template>
  <div class="fixed top-0 left-0 h-screen w-full z-[90] bg-[rgba(0,0,0,.55)]">
    <div @click="$emit('close')" class="w-full h-screen"></div>
    <dialog
      open
      class="fixed left-[50%] z-[100] rounded-[12px] border-none p-0 m-0 overflow-hidden shadow-[ 0 2px 8px rgba(0, 0, 0, 0.26)] top-[30vh]"
    >
      <header class="text-white bg-[var(--mainBlue)] p-[1rem]">
        <slot name="header">
          <h2 class="m-0">{{ title.title }}</h2>
        </slot>
      </header>

      <section
        class="bg-[rgba(242, 242, 242, 1)] p-0 mx-4 my-2 flex flex-col items-center justify-center"
      >
        <slot></slot>
      </section>

      <menu
        class="bg-[rgba(242, 242, 242, 1)] flex justify-center m-0 p-[1rem]"
      >
        <slot name="actions"> </slot>
      </menu>
    </dialog>
  </div>
</template>

<script setup>
const title = defineProps(["title"]);
const close = defineEmits(["close"]);
console.log(close);
</script>

<style scoped>
dialog {
  width: 400px !important;
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
