<template>
  <NuxtLink :to="props.link" class="footerLink">
    <v-card width="300" rounded="lg" class="mx-auto">
      <v-img :src="props.image" height="150" cover></v-img>
      <v-card-item>
        <div class="text-body-1 font-weight-bold mt-2">
          {{ props.title }}
        </div>
        <div class="text-body-2 mt-2">
          {{ props.description }}
        </div>
      </v-card-item>
    </v-card>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: String,
  image: String,
  title: String,
  description: String,
});
</script>
