<script setup>
import { ref } from "vue";
import Project from "@/components/Project.vue";
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
    <div class="column">
      <Project title="Projet 1" description="hello it is a project" srcImage="https://pikmin.fandom.com/fr/wiki/Pikmin_rouge" link="lien::lien"/>
    </div>
  </div>
</template>
