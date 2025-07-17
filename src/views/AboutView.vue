<script setup>
import { ref } from "vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
const { start, mid, startBis, midBis } = useAnimationStore();

useSmoothTransition(start, ref(0));
useSmoothTransition(mid, ref(0));
useSmoothTransition(startBis, ref(-15));
useSmoothTransition(midBis, ref(15));
</script>

<template>
  <h1>
    <span v-for="x in 5" :style="{ animationDelay: (x - 1) * 0.3 + 's' }">{{
      "About".charAt(x - 1)
    }}</span>
  </h1>
  <p>
    I am passionate about programming. That is why, I want to study the art of
    designing a good application.<br />
    I want to improve and I love how much I can learn in this field. I am very
    interrested in AI, video game development and the latest tech news.
  </p>
</template>
