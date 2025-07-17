<script setup>
import { ref } from "vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
const { start, mid, startBis, midBis } = useAnimationStore();

useSmoothTransition(start, ref(20));
useSmoothTransition(mid, ref(-5));
useSmoothTransition(startBis, ref(-20));
useSmoothTransition(midBis, ref(5));
</script>

<template>
  <h1>
    <span v-for="x in 10" :style="{ animationDelay: (x - 1) * 0.3 + 's' }">{{
      "Experience".charAt(x - 1)
    }}</span>
  </h1>
  <div class="row">
    <ul>
      <li>
        <strong>2023 - Baccalauréat (French High School Diploma)</strong><br />
        Specialized in Mathematics and Computer Science.
      </li>
      <hr />
      <li>
        <strong>2024 - Software development internship, ENSICAEN</strong><br />
        Contributed to the improvment of a Java application as part of a team
        project.
      </li>
      <hr />
      <li>
        <strong>Present - Undergraduate Studies in IT (BUT)</strong><br />
        Currently studying Computer Science at the IUT of Ifs, in France.
      </li>
    </ul>
    <div class="cards">
      <button>⇚</button>
      <button>⇛</button>
    </div>
  </div>
</template>
