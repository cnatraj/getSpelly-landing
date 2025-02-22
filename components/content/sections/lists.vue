<template>
  <v-list density="compact">
    <v-list-item v-for="(item, i) in props.items" :key="i">
      <div v-html="useParseMarkdown(item)"></div>
    </v-list-item>
  </v-list>
</template>

<script setup>
  import { useParseMarkdown } from '../../../composables/useParseMarkdown'

  const props = defineProps({
    items: Array
  })
</script>
