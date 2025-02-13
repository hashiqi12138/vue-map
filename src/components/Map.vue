<script setup lang="ts">
import { ref } from "vue";
import ico from "../assets/blue-level-1.png";
const icon = BM.icon({
  iconUrl: ico,
  iconAnchor: [24, 56],
});

const show = ref(true);

function toggle() {
  show.value = !show.value;
}
</script>

<template>
  <map-app
    mapDomId="map"
    :mapConfig="{
      center: [24, 112],
      zoom: 7,
      zoomControl: false,
      attributionControl: false,
    }"
    HttpUrl="http://127.0.0.1:9000"
    accessToken="pk.eyJ1IjoiY3VzXzRsOTVmaWNnIiwiYSI6IjVmMnMyYXN4bndzZWxwZHlmcWF5MzRiZ3gifQ.WtYK7UsuYIsmUDKqAeznCQ"
  >
    <layer layerName="bigemap.tian-map"> </layer>

    <layer layerName="bigemap.tian-satellitestreets"> </layer>

    <overlay :longitude="112" :latitude="24">
      <div class="test">this is a overlay</div>
      <div>this is a overlay</div>
      <button
        style="z-index: 10000; position: absolute"
        class="control"
        @click="toggle"
      >
        toggle marker
      </button>
    </overlay>

    <feature v-if="show" :longitude="115" :latitude="24" :icon="icon" />
  </map-app>
</template>

<style scoped>
.test {
  color: red;
}

.control {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11111;
}
</style>
