<template>
  <v-row class="py-6" no-gutters align="center">
    <v-col>
      <v-img :src="logo" :width="150" cover />
    </v-col>
    <v-col class="text-right">
      <v-btn class="elevatedButton" color="secondary" @click="goToApp"
        >Get Started</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import { useAppNavigation } from "../composables/useAppNavigation";

// Get app navigation
const { goToApp } = useAppNavigation();

const logo = new URL("../assets/images/spellyLogo.png", import.meta.url).href;
</script>
