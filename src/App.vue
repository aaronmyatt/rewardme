
<script setup lang="ts">
import { useHead } from '@vueuse/head'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Reward Me',
  meta: [
    { name: 'description', content: 'Rewarding Better Behaviour' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: 'Reward Me' },
    { name: 'og:url', content: 'https://rewardme.me' },
    { name: 'og:image', content: '/social.jpg' },
    { name: 'og:site_name', content: 'Reward Me' },
    { name: 'og:description', content: 'Good deeds, good rewards' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@aaronmyatt' },
    { name: 'twitter:title', content: 'Reward Me' },
    { name: 'twitter:url', content: 'https://rewardme.me' },
    { name: 'twitter:description', content: 'Good deeds, good rewards' },
    { name: 'twitter:image', content: '/social.jpg' },
  ],
})
</script>

<template>
  <router-view />
</template>
