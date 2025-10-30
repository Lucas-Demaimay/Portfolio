<script setup>
import { ref } from "vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
import { useScroll } from "@/composable/useScroll";
const { start, mid, startBis, midBis } = useAnimationStore();
const { scroll: scroll1, indicator: indicator1 } = useScroll();
const { scroll: scroll2, indicator: indicator2 } = useScroll();
const { scroll: scroll3, indicator: indicator3 } = useScroll();
const experiences = [
  "<strong>2023 - Baccalauréat (French High School Diploma)</strong><br />Specialized in Mathematics and Computer Science.",
  "<strong>2024 - Software development internship, ENSICAEN</strong><br />Contributed to the improvment of a Java application as part of a team project.",
  "<strong>Present - Undergraduate Studies in IT (BUT)</strong><br />Currently studying Computer Science at the IUT of Ifs, in France.",
];

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
  "Vue.js",
  "Laravel",
];

const tools = [
  "Git (GitHub, GitLab)",
  "VSCode",
  "Eclipse IDE",
  "IntelliJ",
  "OpenOffice",
  "LibreOffice",
  "StarUML",
  
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
      <ul ref="scroll3" class="scroll">
        <li v-for="(experience, index) in experiences">
          <div v-html="experience" />
          <hr v-if="index != experiences.length - 1" />
        </li>
        <li ref="indicator3" class="indicator"></li>
      </ul>
    </div>
    <div class="column">
      <h3>Programming langages and frameworks</h3>
      <ul ref="scroll1" class="scroll">
        <li v-for="(language, index) in languages">
          {{ language }}
          <hr v-if="index != languages.length - 1" />
        </li>
        <li ref="indicator1" class="indicator"></li>
      </ul>
    </div>
    <div class="column">
      <h3>Tools</h3>
      <ul ref="scroll2" class="scroll">
        <li v-for="(tool, index) in tools">
          {{ tool }}
          <hr v-if="index != tools.length - 1" />
        </li>
        <li ref="indicator2" class="indicator"></li>
      </ul>
    </div>
  </div>
</template>
