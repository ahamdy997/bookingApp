<template>
  <router-view>
    <transition name="route"></transition>
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
