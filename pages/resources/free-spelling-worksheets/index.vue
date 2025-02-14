<template>
  <ContentPage :resource="resource" />
</template>

<script setup>
import resource from "@/data/resources/free-spelling-worksheets/index.json";

import ContentPage from "../../../components/content/contentPage.vue";
</script>
