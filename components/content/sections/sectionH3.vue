<template>
  <div class="mt-4">
    <h3 class="text-h4">
      {{ props.text }}
    </h3>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    text: String
  })
</script>
