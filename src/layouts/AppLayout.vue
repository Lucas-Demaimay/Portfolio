<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
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
        :style="{ animationDelay: x * 0.2 + 's' }"
      ></div>
    </div>
    <div class="coolBackground">
      <div
        v-for="x in 75"
        class="invertedBlock"
        :style="{ animationDelay: x * 0.2 + 's' }"
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
