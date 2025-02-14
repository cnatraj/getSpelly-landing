<template>
  <section>
    <v-img
      :src="heroImage"
      cover
      height="600"
      position="left top"
      class="rounded-lg heroSectionGradient"
    >
      <div class="px-10">
        <TopNav />
        <v-row class="my-0">
          <v-col cols="12" sm="12" md="6" lg="6">
            <div>
              <!-- <v-img :src="spelly" height="150"></v-img> -->
              <h1 class="text-h1 text-default">
                The free, and fun, way to learn spelling!
              </h1>
              <h2 class="text-h6 text-default">
                Unlock the joy of spelling through games and adventures designed
                for kids aged 8-12.
              </h2>
              <v-btn
                class="elevatedButton mt-8"
                color="primary"
                size="x-large"
                @click="goToApp"
                >Start Learning</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- Floating Arrow -->
      <div class="scroll-indicator" @click="scrollToContent">
        <v-avatar
          icon="mdi-chevron-down"
          size="x-large"
          class="floating-arrow opacity-50"
          color="black"
        ></v-avatar>
      </div>
      <CommonShapeDivider
        :color="theme.current.value.colors.section1"
        position="bottom"
      />
    </v-img>
  </section>

  <section class="bg-section1 py-16" id="content">
    <div class="text-center">
      <v-chip color="secondary" variant="flat">Your spelling companion </v-chip>
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
</template>

<script setup>
import { useDisplay, useTheme } from "vuetify";
import { useAppNavigation } from "../composables/useAppNavigation";
import ParentBenefits from "../components/ParentBenefits.vue";
import WhyKidsLoveUs from "../components/WhyKidsLoveUs.vue";
import FooterCTA from "../components/FooterCTA.vue";
import Footer from "../components/Footer.vue";
import TopNav from "../components/TopNav.vue";

// Get theme instance
const theme = useTheme();

// get screen size
const { mobile, md, lg, lgAndUp } = useDisplay();

// Get app navigation
const { goToApp } = useAppNavigation();

// Function to scroll to content
const scrollToContent = () => {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

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
  position: relative;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.35) 40%,
    rgba(237, 248, 225, 0) 70%
  );
}

.hero-seadsction {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 10;
}

.floating-arrow {
  animation: float 2s ease-in-out infinite;
  color: var(--v-theme-primary);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Hover effect for the arrow */
.scroll-indicator:hover .floating-arrow {
  animation-play-state: paused;
  transform: scale(1.2);
  transition: transform 0.2s ease;
}
</style>
