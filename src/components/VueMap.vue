<script setup lang="ts">
import { createApp } from "../../lib/index.ts";
import { shallowRef, onMounted, useSlots } from "vue";
import Map from "./Map.vue";
import { createPluginForRuntime } from "../../lib/plugin/bigeMapPlugin.ts";
import { registerMapPlugin } from "../../lib/runtime/node-ops.ts";
const app = shallowRef(null);

registerMapPlugin(createPluginForRuntime());

const slots = useSlots();

onMounted(() => {
  const appCom = createApp({
    render: () => {
      return slots.default();
    },
  });
  app.value = appCom;
  console.log(app.value);
  const el = document.getElementById("map");
  appCom.mount(el);
});

defineExpose({
  app,
});
</script>

<template>
  <div class="map" id="map">
    
  </div>
</template>

<style scoped>
.map {
  width: 200px;
  height: 200px;
  background-color: aqua;
  color: #888;
}
</style>
