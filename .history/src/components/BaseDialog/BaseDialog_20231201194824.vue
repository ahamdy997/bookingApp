<template>
  <div class="fixed top-0 left-0 h-screen w-full z-[90] bg-[rgba(0,0,0,.55)]">
    <div @click="$emit('close')" class="w-full h-screen"></div>
    <dialog
      open
      class="fixed left-[10%] w-[400px] z-[100] rounded-[12px] border-none p-0 m-0 overflow-hidden shadow-[ 0 2px 8px rgba(0, 0, 0, 0.26)] top-[35vh] h-[500px]"
    >
      <header>
        <slot name="header">
          <h2>{{ title.title }}</h2>
        </slot>
      </header>

      <section class="bg-[rgba(242, 242, 242, 1)]">
        <slot></slot>
      </section>

      <menu class="bg-[rgba(242, 242, 242, 1)]">
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
/* dialog {
  position: fixed;
  top: 35vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
} */

header {
  background-color: var(--mainBlue);
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
