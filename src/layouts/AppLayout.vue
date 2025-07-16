<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <Header/>
  </header>
  <main>
    <div class="coolBackground">
      <div v-for="x in 90" class="block" :style="{ animationDelay: (x * 0.2) + 's' }"></div>   
    </div>
    <slot />
  </main>
  <footer>
    <Footer/>
  </footer>
</template>
