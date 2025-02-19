<template>
  <v-table class="mt-4 text-body-1">
    <thead class="bg-section3" v-if="props.table.columns">
      <tr>
        <th v-for="col in props.table.columns" :key="col">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in props.table.rows" :key="i">
        <td
          v-for="(cell, j) in row"
          :key="j"
          v-html="useParseMarkdown(cell)"
        ></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useParseMarkdown } from "../../../composables/useParseMarkdown";

const props = defineProps({
  table: Object,
});
</script>
