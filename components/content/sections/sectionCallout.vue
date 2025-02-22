<template>
  <div
    class="d-flex border-md border-dashed text-medium-emphasis border-primary rounded-lg pa-3 ma-3 align-center bg-section2"
  >
    <div class="text-h3 mr-3">
      {{ calloutIcon[callout.type] || '💡' }}
    </div>
    <div>
      <div v-if="callout?.title" class="font-weight-bold">{{ callout?.title || '' }}</div>
      <div v-html="useParseMarkdown(callout?.text)"></div>
    </div>
  </div>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    callout: Object
  })

  const calloutIcon = { idea: '💡', tip: '📌' }
</script>
