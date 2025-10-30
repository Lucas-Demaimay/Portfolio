<script setup>
import { ref } from "vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
const { start, mid, startBis, midBis } = useAnimationStore();

useSmoothTransition(start, ref(20));
useSmoothTransition(mid, ref(5));
useSmoothTransition(startBis, ref(-20));
useSmoothTransition(midBis, ref(-5));
</script>

<template>
  <h1>
    <span v-for="x in 8" :style="{ animationDelay: (x - 1) * 0.3 + 's' }">{{
      "Projects".charAt(x - 1)
    }}</span>
  </h1>
  <div class="row">
    <p>
      I am passionate about programming. That is why, I want to study the art of
      designing a good application.<br />
      I want to improve and I love how much I can learn in this field. I am very
      interrested in AI, video game development and the latest tech news.
    </p>
  </div>
</template>
