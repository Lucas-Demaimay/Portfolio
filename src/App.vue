<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import { ref } from "vue";

const posX = ref(0);
const posY = ref(0);
const pointer = ref(null);

function movePointer(event) {
  posX.value = event.clientX;
  posY.value = event.clientY;
}

</script>

<template>
  <div @pointermove="movePointer" class="app">
    <div
      ref="pointer"
      :style="{ left: posX + 'px', top: posY + 'px' }"
      id="pointer"
    ></div>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>
