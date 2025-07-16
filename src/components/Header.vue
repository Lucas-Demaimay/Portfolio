<script setup>
</script>

<template>
  <h2><RouterLink :to="'/'">Lucas Demaimay</RouterLink></h2>
  <nav>
    <ul>
      <li><RouterLink :to="'about'">About</RouterLink></li>
      <li><RouterLink :to="'experience'">Experience</RouterLink></li>
      <li><RouterLink :to="'projects'">Projects</RouterLink></li>
    </ul>
  </nav>
</template>
