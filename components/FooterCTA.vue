<template>
  <v-img :src="footerCTA" cover>
    <div class="fill-height footerCTAGradient">
      <v-container class="pa-16">
        <v-row justify="center" align="center" class="my-10">
          <v-col>
            <h2 class="text-h1">{{ props.title }}</h2>
            <p class="font-weight-bold">
              {{ props.subTitle }}
            </p>
            <v-btn
              class="elevatedButton mt-8"
              color="primary"
              size="x-large"
              @click="goToApp"
              >{{ props.buttonText }}</v-btn
            >
          </v-col>
          <v-col md="6">
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
        :color="props.topShapeDividerColor"
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
import { useAppNavigation } from "../composables/useAppNavigation";

const theme = useTheme();
const props = defineProps({
  title: {
    type: String,
    default: "Start your child’s adventure!",
  },
  subTitle: {
    type: String,
    default: "Help your child master spelling with Spelly the Owl.",
  },
  buttonText: {
    type: String,
    default: "Get Started",
  },
  topShapeDividerColor: {
    type: String,
    default: "#EDF7E1",
  },
});

const { mobile, md, lg, lgAndUp } = useDisplay();

// Get app navigation
const { goToApp } = useAppNavigation();

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
