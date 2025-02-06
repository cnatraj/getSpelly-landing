<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <v-img :src="logo" :width="100" class="mb-2" />
      </v-col>
    </v-row>

    <v-row class="text-default" align="start">
      <v-col cols="12" sm="6">
        <p class="text-h5">The fun way to learn how to spell!</p>
        <p class="mt-2 text-body-2">© 2025 Spelly. All rights reserved.</p>
        <p class="mt-2">
          <NuxtLink
            class="text-subtitle-2 text-tertiary footerLink"
            to="/spelling-games"
            >Spelling Games</NuxtLink
          >
          <NuxtLink
            class="text-subtitle-2 text-tertiary footerLink ml-2"
            to="/spelling-test"
            >Spelling Test</NuxtLink
          >
        </p>
      </v-col>

      <v-col cols="12" sm="6">
        <div>
          <p class="text-subtitle-2 mb-2 ml-4">Join our community</p>
          <v-text-field
            placeholder="Your email address"
            rounded="pill"
            variant="solo"
            flat
            bg-color="#FAFAFB"
          >
            <template v-slot:append-inner>
              <v-btn rounded="pill" elevation="0" color="primary">Join</v-btn>
            </template>
          </v-text-field>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const logo = new URL("../assets/images/spellyLogo.png", import.meta.url).href;
</script>
