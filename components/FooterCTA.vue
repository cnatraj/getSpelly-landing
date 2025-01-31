<template>
  <v-img :src="footerCTA" cover>
    <div class="fill-height footerCTAGradient">
      <v-container class="pa-16">
        <v-row justify="center" align="center" class="my-10">
          <v-col>
            <p class="text-h1">Start your child’s adventure!</p>
            <p class="font-weight-bold">
              Help your child master spelling with Spelly the Owl.
            </p>
            <v-btn class="elevatedButton mt-8" color="primary" size="x-large"
              >Get Started</v-btn
            >
          </v-col>
          <v-col v-if="!mobile">
            <v-img
              :src="screenshot1"
              width="300"
              class="border-lg rounded-xl border-primary bg-primary elevation-3 mx-auto"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
      <CommonShapeDivider
        :color="theme.current.value.colors.section2"
        position="top"
        :invert="true"
      />

      <CommonShapeDivider
        :color="theme.current.value.colors.white"
        position="bottom"
      />
    </div>
  </v-img>
</template>

<script setup>
import { useDisplay, useTheme } from "vuetify";

const theme = useTheme();
const { mobile, md, lg, lgAndUp } = useDisplay();

const footerCTA = new URL("../assets/images/footerCTA-bg.jpg", import.meta.url)
  .href;
const screenshot1 = new URL(
  "../assets/images/footer-screenshot.png",
  import.meta.url
).href;
</script>

<style scoped>
.footerCTAGradient {
  background: rgba(255, 255, 255, 0.35);
}
</style>
