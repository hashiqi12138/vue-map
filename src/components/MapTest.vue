<script setup lang="ts">
import { ref } from "vue";
import MapComp from "./Map.vue";
import MapCompDark from "./MapDark.vue";
import VueMap from "./VueMap.vue";

const map = ref(null);

const current = ref("light");
function toggle() {
  console.log("on toggle");
  current.value = current.value === "light" ? "dark" : "light";
}
</script>

<template>
  <VueMap ref="map">
    <MapComp v-if="current === 'light'" />
    <MapCompDark v-else />
  </VueMap>

  <div class="control">
    <button class="control-button" @click="toggle">切换主题</button>
  </div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 100%;
  color: #888;
}

.control-button {
  background: #fff;
  color: #000;
}

.control {
  position: absolute;
  left: 16px;
  top: 16px;
  background-color: aqua;
  box-shadow: 0px 0px 24px 5px rgba(0, 255, 255, 0.5);
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
