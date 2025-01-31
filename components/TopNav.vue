<template>
  <v-row class="py-6" no-gutters align="center">
    <v-col>
      <v-img :src="logo" :width="150" cover />
    </v-col>
    <v-col class="text-right">
      <v-btn class="elevatedButton" color="secondary">Get Started</v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
const logo = new URL("../assets/images/spellyLogo.png", import.meta.url).href;
</script>
