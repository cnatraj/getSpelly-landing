<template>
  <div class="pt-10">
    <h2 class="text-h3">
      {{ props.text }}
    </h2>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    text: String
  })
</script>
