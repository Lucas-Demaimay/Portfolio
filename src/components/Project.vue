<script setup>
defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    },
    link: {
        type: String
    },
    srcImage: {
        type: String
    },
    alt: {
        type: String
    }
})
</script>

<template>
    <div class="project"> 
        <h2>{{ title }}</h2>
        <p class="keywords">Java, </p>
        <p class="description">{{ description }}</p>
        <img :src="srcImage" :alt="alt"></img>
        <a class="project-link">{{ link }}</a>
    </div>
</template>