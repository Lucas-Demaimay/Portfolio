<script setup>
import { ref, computed } from "vue";
import Project from "@/components/Project.vue";
import { useAnimationStore } from "@/composable/useAnimationStore";
import { useSmoothTransition } from "@/composable/useSmoothTransition";
import projects from "@/data/projects.json";
const { start, mid, startBis, midBis } = useAnimationStore();

useSmoothTransition(start, ref(20));
useSmoothTransition(mid, ref(5));
useSmoothTransition(startBis, ref(-20));
useSmoothTransition(midBis, ref(-5));

const selectedProject = ref(0);
const currentProject = computed(() => projects[selectedProject.value]);

function previousProject() {
  selectedProject.value = (selectedProject.value - 1 + projects.length) % projects.length;
  console.log(selectedProject.value)
}
function nextProject() {
  selectedProject.value = (selectedProject.value + 1) % projects.length;
  console.log(selectedProject.value)
}
</script>

<template>
  <h1>
    <span v-for="x in 8" :style="{ animationDelay: (x - 1) * 0.3 + 's' }">{{
      "Projects".charAt(x - 1)
    }}</span>
  </h1>
  <div class="row">
    <div class="column">
      <button @click="previousProject">
        <i class="fas fa-arrow-up"></i>
      </button>
      <Project
        :title="currentProject?.title"
        :keywords="currentProject?.keywords"
        :description="currentProject?.description"
        :image="currentProject?.image"
        :alt="currentProject?.alt"
        :links="currentProject?.links"
      />
      <button @click="nextProject">
        <i class="fas fa-arrow-down"></i>
      </button>
    </div>
  </div>
</template>
