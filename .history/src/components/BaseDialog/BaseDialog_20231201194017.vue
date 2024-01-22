<template>
  <div class="trans">
    <div
      @click="$emit('close')"
      class="fixed top-0 left-0 h-screen w-full bg-[rgba(0, 0, 0, 0.55)] z-[90]"
    ></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title.title }}</h2>
        </slot>
      </header>

      <section class="bg-g">
        <slot></slot>
      </section>

      <menu class="bg-g">
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
.bg-g {
  background-color: rgba(242, 242, 242, 1);
}
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 90;
}

dialog {
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
}

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
