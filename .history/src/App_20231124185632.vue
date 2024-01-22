<template>
  <router-view v-slot="slotProps">
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --mainBlue: #2f80ed;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
