<template>
  <div class="mt-4">
    <div class="mb-2" v-html="useParseMarkdown(paragraph)"></div>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    paragraph: String
  })
</script>
