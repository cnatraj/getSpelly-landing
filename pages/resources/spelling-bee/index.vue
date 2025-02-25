<template>
  <ContentPage :resource="resource" />
</template>

<script setup>
  import resource from '@/data/resources/spelling-bee/index.json'

  import ContentPage from '../../../components/content/contentPage.vue'
</script>
