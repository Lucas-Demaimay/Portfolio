<script setup>
import { ref } from "vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
import { useScroll } from "@/composable/useScroll";
const { start, mid, startBis, midBis } = useAnimationStore();
const { scroll, indicator } = useScroll();

const languages = [
  "C",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "SQL",
  "Kotlin",
  "C#",
  "PHP",
];

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
    <div class="column">
      <h3>Education and work experiences</h3>
      <ul>
        <li>
          <strong>2023 - Baccalauréat (French High School Diploma)</strong
          ><br />
          Specialized in Mathematics and Computer Science.
        </li>
        <li><hr /></li>
        <li>
          <strong>2024 - Software development internship, ENSICAEN</strong
          ><br />
          Contributed to the improvment of a Java application as part of a team
          project.
        </li>
        <li><hr /></li>
        <li>
          <strong>Present - Undergraduate Studies in IT (BUT)</strong><br />
          Currently studying Computer Science at the IUT of Ifs, in France.
        </li>
      </ul>
    </div>
    <div class="column">
      <h3>Programming langages learned</h3>
      <ul ref="scroll" class="scroll">
        <li v-for="(language, index) in languages">
          {{ language }}
          <hr v-if="index != languages.length - 1" />
        </li>
        <li ref="indicator" class="indicator"></li>
      </ul>
    </div>
  </div>
</template>
