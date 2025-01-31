<template>
  <v-container
    class="pa-0 border-xl rounded-lg border-white border-opacity-100"
  >
    <div class="rounded-lg">
      <v-img
        :src="heroImage"
        cover
        height="550"
        position="left center"
        class="rounded-lg"
      >
        <div class="fill-height heroSectionGradient">
          <div>
            <v-btn variant="text" class="text-white">Home</v-btn>
            <v-btn variant="text" class="text-white">About</v-btn>
            <v-btn variant="text" class="text-white">Books</v-btn>
          </div>

          <v-row>
            <v-col cols="12" sm="6">
              <div class="pa-8">
                <!-- <v-img :src="spelly" height="150"></v-img> -->
                <h1 class="text-h1 text-default">
                  The free, and fun, way to learn spelling!
                </h1>
                <h2 class="text-h6 text-default">
                  Unlock the joy of spelling through games and adventures
                  designed for kids aged 8-12.
                </h2>
                <v-btn
                  class="elevatedButton mt-8"
                  color="primary"
                  size="x-large"
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
    </div>
    <section class="bg-section1 py-16">
      <div class="text-center">
        <v-chip color="secondary" variant="flat"
          >Your spelling companion
        </v-chip>
        <h3 class="my-6">Meet Spelly – Your Friendly Spelling Guide!</h3>
        <p class="px-10">
          Say hello to Spelly the Owl! He’s here to make spelling fun and
          exciting, helping you master new words with ease!
        </p>

        <v-img :src="appScreenshots" width="700" class="mx-auto mt-6"></v-img>
        <CommonShapeDivider
          :color="theme.current.value.colors.white"
          position="bottom"
          :flip="true"
        />
      </div>
    </section>

    <section class="bg-white py-16 px-10">
      <h3 class="my-6 text-center">Why kids love learning with Spelly!</h3>
      <WhyKidsLoveUs />
      <CommonShapeDivider
        :color="theme.current.value.colors.section2"
        position="bottom"
        :flip="true"
      />
    </section>

    <section class="bg-section2 py-16">
      <h3 class="my-6 text-center">Why parents love us!</h3>
      <ParentBenefits />
    </section>

    <section>
      <FooterCTA />
    </section>

    <section class="bg-white mt-n1 px-16 py-16">
      <Footer />
    </section>
  </v-container>
</template>

<script setup>
import { useDisplay, useTheme } from "vuetify";
import ParentBenefits from "../components/ParentBenefits.vue";
import WhyKidsLoveUs from "../components/WhyKidsLoveUs.vue";
import FooterCTA from "../components/FooterCTA.vue";
import Footer from "../components/Footer.vue";

const theme = useTheme();
const { mobile, md, lg, lgAndUp } = useDisplay();

const heroImage = new URL(
  "../assets/images/hero-section-bg.jpg",
  import.meta.url
).href;
const spelly = new URL("../assets/images/spelly-excited.png", import.meta.url)
  .href;

const appScreenshots = new URL(
  "../assets/images/appScreenshots.jpg",
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
