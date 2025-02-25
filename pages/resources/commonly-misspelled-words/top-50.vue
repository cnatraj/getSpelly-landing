<template>
  <ContentPage :resource="resource" />
</template>

<script setup>
  import resource from '@/data/resources/commonly-misspelled-words/top-50.json'

  import ContentPage from '../../../components/content/contentPage.vue'
</script>
