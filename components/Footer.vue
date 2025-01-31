<template>
  <div class="mb-10">Logo</div>
  <v-divider></v-divider>

  <v-container class="pa-0 mt-10">
    <v-row class="text-default">
      <v-col cols="12" sm="6">
        <p class="text-h5">The fun way to learn spelling!</p>
        <p class="mt-10 pr-16">
            <div class="text-caption mb-2">Join our community</div>
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
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <div>

        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-divider class="mt-6"></v-divider>

  <p class="mt-6">© 2025 Spelly. All rights reserved.</p>
</template>

<script setup></script>
