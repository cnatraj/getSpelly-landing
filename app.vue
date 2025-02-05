<template>
  <v-app>
    <v-container
      class="pa-0 border-xl rounded-lg border-white border-opacity-100 my-2"
    >
      <NuxtPage />

      <section class="bg-white pa-16">
        <Footer />
      </section>
    </v-container>
  </v-app>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>
<style>
@import "~/assets/styles/main.scss";
</style>
