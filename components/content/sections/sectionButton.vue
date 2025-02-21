<template>
  <div class="mt-4">
    <v-btn color="secondary" :to="button.url" class="elevatedButton">
      {{ button.text }}
    </v-btn>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    button: Object
  })
</script>
