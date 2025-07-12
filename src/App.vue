<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import { ref } from "vue";

const posX = ref(0);
const posY = ref(0);

function movePointer(event) {
  posX.value = event.clientX;
  posY.value = event.clientY;
}
</script>

<template>
  <div @mousemove="movePointer" class="app">
    <div :style="{ left: posX + 'px', top: posY + 'px' }" id="pointer"></div>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>
