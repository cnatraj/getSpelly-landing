<template>
  <ContentPage :resource="resource" />
</template>

<script setup>
  import resource from '@/data/resources/spelling-bee/hard-words.json'

  import ContentPage from '../../../components/content/contentPage.vue'
</script>
