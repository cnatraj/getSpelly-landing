<template>
  <ContentPage :resource="resource" />
</template>

<script setup>
  import resource from '@/data/resources/spelling-bee/4th-grade-spelling-bee-words.json'

  import ContentPage from '../../../components/content/contentPage.vue'

  console.log(resource)
</script>
