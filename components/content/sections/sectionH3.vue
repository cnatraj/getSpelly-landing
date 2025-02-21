<template>
  <div class="mt-4">
    <h3 class="text-h4">
      {{ props.h3 }}
    </h3>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    h3: String
  })
</script>
