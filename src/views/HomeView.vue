<script setup>
import { ref } from "vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
const { start, mid, startBis, midBis } = useAnimationStore();

useSmoothTransition(start, ref(15));
useSmoothTransition(mid, ref(-15));
useSmoothTransition(startBis, ref(-15));
useSmoothTransition(midBis, ref(15));
</script>

<template>
  <h1>
    <span v-for="x in 7" :style="{ animationDelay: (x - 1) * 0.3 + 's' }">{{
      "Welcome".charAt(x - 1)
    }}</span>
  </h1>
  <p>
    I am Lucas Demaimay.<br />I am currently open to apprenticeship opportunities in the field of IT. 
  </p>
</template>
