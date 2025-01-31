<template>
  <v-container class="pa-0">
    <v-row class="text-default" align="center">
      <v-col cols="12" sm="6">
        <v-img :src="logo" :width="100" class="mb-2" />
        <p class="text-h5">The fun way to learn how to spell!</p>
        <p class="mt-2 text-body-2">© 2025 Spelly. All rights reserved.</p>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="mt-10 pr-16">
          <p class="text-caption mb-2">Join our community</p>
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
