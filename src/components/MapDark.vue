<script setup lang="ts">
import ico from "../assets/blue-level-1.png";
const icon = BM.icon({
  iconUrl: ico,
  iconAnchor: [24, 56],
});
</script>

<template>
  <map-app
    mapDomId="map"
    :mapConfig="{
      center: [25, 112],
      zoom: 7,
      zoomControl: false,
      attributionControl: false,
    }"
    HttpUrl="http://127.0.0.1:9000"
    accessToken="pk.eyJ1IjoiY3VzXzRsOTVmaWNnIiwiYSI6IjVmMnMyYXN4bndzZWxwZHlmcWF5MzRiZ3gifQ.WtYK7UsuYIsmUDKqAeznCQ"
  >
    <layer layerName="bigemap.tian-satellite"> </layer>

    <layer layerName="bigemap.tian-satellitestreets"> </layer>

    <overlay :longitude="112" :latitude="24">
      <div class="test">this is a dark overlay</div>
      <div>this is a dark overlay</div>
    </overlay>

    <feature :longitude="115" :latitude="24" :icon="icon"/>
  </map-app>
</template>

<style scoped>
.test {
  color: red;
}
</style>
