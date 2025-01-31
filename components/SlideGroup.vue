<template>
  <v-slide-group show-arrows>
    <v-slide-group-item v-for="(slide, i) in props.items" :key="i">
      <v-card
        width="250"
        rounded="lg"
        bg-color="white"
        elevation="0"
        class="text-left py-4 mx-4 elevatedCard"
      >
        <v-card-item class="pb-0">
          <v-icon :icon="slide.icon" color="primary" size="large"></v-icon>
        </v-card-item>
        <v-card-item class="text-default text-h6">
          {{ slide.title }}
        </v-card-item>
        <v-card-text class="text-default">
          {{ slide.text }}
        </v-card-text>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>
