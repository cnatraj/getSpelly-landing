<template>
  <v-expansion-panels class="mt-4 pb-4">
    <v-expansion-panel
      v-for="(faq, i) in props.items"
      :key="i"
      :title="faq.question"
      :text="faq.answer"
    >
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup>
// import { useParseMarkdown } from "../../../composables/useParseMarkdown";

const props = defineProps({
  items: Array,
});
</script>
