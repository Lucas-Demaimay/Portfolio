<script setup>
defineProps({
    title: {
        type: String
    },
    keywords: {
        type: String 
    },
    description: {
        type: String
    },
    links: {
        type: Array
    },
    image: {
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
        <p class="keywords">{{ keywords }}</p>
        <p class="description">{{ description }}</p>
        <img v-if="image" :src="image" :alt="alt"></img>
        <a v-for="link in links" class="project-link">{{ link }}</a>
    </div>
</template>