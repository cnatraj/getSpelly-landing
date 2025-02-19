<template>
  <!-- Table Section -->
  <v-table class="mt-4" v-if="props.section.type === 'table'">
    <thead class="bg-section3">
      <tr>
        <th v-for="col in props.section.columns" :key="col">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in props.section.rows" :key="i">
        <td v-for="(cell, j) in row" :key="j" v-html="parseMarkdown(cell)"></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps({
  section: Object,
});
</script>
