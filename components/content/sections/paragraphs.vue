<template>
  <div class="mt-4">
    <div
      class="mb-2"
      v-for="(text, i) in props.paragraphs"
      v-html="useParseMarkdown(text)"
    ></div>
  </div>
</template>

<script setup>
import { useParseMarkdown } from "../../../composables/useParseMarkdown";

const props = defineProps({
  paragraphs: Array,
});
</script>
