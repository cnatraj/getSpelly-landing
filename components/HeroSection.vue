<template>
  <v-img
    :src="heroImage"
    cover
    height="550"
    position="left center"
    class="rounded-lg"
  >
    <div class="fill-height heroSectionGradient px-16">
      <TopNav />

      <v-row>
        <v-col cols="12" sm="6">
          <div class="pt-8">
            <!-- <v-img :src="spelly" height="150"></v-img> -->
            <h1 class="text-h1 text-default">
              The free, and fun, way to learn spelling!
            </h1>
            <h2 class="text-h6 text-default">
              Unlock the joy of spelling through games and adventures designed
              for kids aged 8-12.
            </h2>
            <v-btn class="elevatedButton mt-8" color="primary" size="x-large"
              >Start Learning</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </div>
    <CommonShapeDivider
      :color="theme.current.value.colors.section1"
      position="bottom"
    />
  </v-img>
</template>

<script setup>
import { useTheme } from "vuetify";
import TopNav from "../components/TopNav.vue";

const theme = useTheme();
const heroImage = new URL(
  "../assets/images/hero-section-bg.jpg",
  import.meta.url
).href;
</script>

<style scoped>
.heroSectionGradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.35) 40%,
    rgba(237, 248, 225, 0) 70%
  );
}
</style>
