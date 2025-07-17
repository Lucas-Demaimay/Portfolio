<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useAnimationStore } from "@/composable/useAnimationStore";

const { start, mid, startBis, midBis } = useAnimationStore();

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <div class="coolBackground">
      <div
        v-for="x in 75"
        class="block"
        :style="{
          animationDelay: x * 0.2 + 's',
          '--start': start+'vw',
          '--mid': mid+'vw',
        }"
      ></div>
    </div>
    <div class="coolBackground">
      <div
        v-for="x in 75"
        class="invertedBlock"
        :style="{
          animationDelay: x * 0.2 + 's',
          '--startBis': startBis+'vw',
          '--midBis': midBis+'vw',
        }"
      ></div>
    </div>
    <div class="foreground">
      <slot />
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
