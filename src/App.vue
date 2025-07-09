<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<template>
  <div class="app">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>
