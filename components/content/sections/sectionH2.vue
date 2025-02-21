<template>
  <div class="pt-10">
    <h2 class="text-h3">
      {{ props.h2 }}
    </h2>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    h2: String
  })
</script>
