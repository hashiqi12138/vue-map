<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import MapTest from "./components/MapTest.vue";
</script>

<template>
  <MapTest />
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#app {
  width: 100%;
  height: calc(100vh - 4rem);
}
</style>
