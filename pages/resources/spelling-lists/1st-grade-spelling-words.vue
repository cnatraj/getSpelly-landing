<template>
  <ContentPage :resource="resource" />
</template>

<script setup>
  import resource from '@/data/resources/spelling-lists/1st-grade-spelling-words.json'
  import ContentPage from '../../../components/content/contentPage.vue'
</script>
