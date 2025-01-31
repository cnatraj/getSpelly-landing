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
      <div class="text-center">
        <h3 class="my-6">Why kids love learning with Spelly!</h3>
      </div>
      <AlternatingGrid :items="kidsBenefits" />
      <CommonShapeDivider
        :color="theme.current.value.colors.section2"
        position="bottom"
        :flip="true"
      />
    </section>

    <section class="bg-section2 py-16 text-center">
      <h3 class="my-6">Why parents love us!</h3>
      <SlideGroup :items="parentBenefits" />
    </section>

    <section class="">
      <v-img :src="footerCTA" cover>
        <div class="fill-height footerCTAGradient">
          <v-container class="pa-16">
            <v-row justify="center" align="center" class="my-10">
              <v-col>
                <p class="text-h1">Start your child’s adventure!</p>
                <p class="font-weight-bold">
                  Help your child master spelling with Spelly the Owl.
                </p>
                <v-btn
                  class="elevatedButton mt-8"
                  color="primary"
                  size="x-large"
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
    </section>
  </v-container>
</template>

<script setup>
import { useDisplay, useTheme } from "vuetify";
import AlternatingGrid from "../components/AlternatingGrid.vue";
import SlideGroup from "../components/SlideGroup.vue";

const theme = useTheme();
const { mobile, md, lg, lgAndUp } = useDisplay();

const heroImage = new URL(
  "../assets/images/hero-section-bg.jpg",
  import.meta.url
).href;
const spelly = new URL("../assets/images/spelly-excited.png", import.meta.url)
  .href;
const screenshot1 = new URL(
  "../assets/images/footer-screenshot.png",
  import.meta.url
).href;
const appScreenshots = new URL(
  "../assets/images/appScreenshots.jpg",
  import.meta.url
).href;
const kidsBenefits1 = new URL(
  "../assets/images/kids-benefits-1.jpg",
  import.meta.url
).href;
const kidsBenefits2 = new URL(
  "../assets/images/kids-benefits-2.jpg",
  import.meta.url
).href;
const kidsBenefits3 = new URL(
  "../assets/images/kids-benefits-3.jpg",
  import.meta.url
).href;
const kidsBenefits4 = new URL(
  "../assets/images/kids-benefits-4.jpg",
  import.meta.url
).href;
const footerCTA = new URL("../assets/images/footerCTA-bg.jpg", import.meta.url)
  .href;

const kidsBenefits = [
  {
    icon: "mdi-gamepad-variant-outline",
    chipText: "Spelling is fun",
    title: "Turn Learning into Play!",
    text: "Say goodbye to boring spelling drills! With Spelly, learning feels like a game. Complete fun spelling challenges that make every lesson enjoyable!",
    image: kidsBenefits1,
  },
  {
    icon: "mdi-rabbit-variant-outline",
    chipText: "Learn at Your Pace",
    title: "No Pressure, Just Progress!",
    text: "Take your time and learn at your own speed! Whether you're a beginner or a spelling pro, Spelly adjusts the difficulty to match your level. Practice tricky words, replay challenges, and get better every day!",
    image: kidsBenefits3,
  },
  {
    icon: "mdi-bullhorn-outline",
    chipText: "Hear Words Pronounced Clearly",
    title: "Turn Learning into Play!",
    text: "Not sure how a word sounds? No problem! Tap the speaker button to hear words pronounced correctly, helping you spell them with confidence. It’s like having your own personal spelling coach!",
    image: kidsBenefits4,
  },
  {
    icon: "mdi-shield-star-outline",
    chipText: "Rewards & Badges",
    title: "Collect Gems & Unlock Achievements!",
    text: "Every word you spell correctly brings you closer to unlocking exciting rewards! Earn gems, collect badges, unlock avatars, and level up as you improve your spelling skills.",
    image: kidsBenefits2,
  },
];

const parentBenefits = [
  {
    icon: "mdi-shield-lock-outline",
    title: "Kid Safe, Parent approved",
    text: "Your child’s safety is our #1 priority. Spelly is a completely ad-free, secure, and kid-friendly learning space with no distractions.",
  },
  {
    icon: "mdi-brain",
    title: "Builds Spelling Confidence",
    text: "By practicing in a stress-free environment, kids become more comfortable with words, boosting both their spelling and reading confidence.",
  },
  {
    icon: "mdi-medal-outline",
    title: "Prepares kids for spelling challenges",
    text: "Our word lists include words commonly found in popular national spelling competitions, helping kids build the skills they need to succeed in spelling challenges.",
  },
  {
    icon: "mdi-chair-school",
    title: "Grade-Appropriate Word Lists",
    text: "Words are carefully selected based on age and grade level, ensuring that kids are challenged appropriately as they advance.",
  },
  {
    icon: "mdi-wifi",
    title: "100% Online. No app downloads",
    text: "No app install required! Access Spelly instantly on any device, anytime, anywhere via your browser.",
  },
  {
    icon: "mdi-book-open-variant-outline",
    title: "Learn spelling the right way",
    text: "Spelly uses words directly from world renowned dictionaries, ensuring kids learn proper spelling. Kids learn real-world spelling that aligns with educational standards.",
  },
  {
    icon: "mdi-school-outline",
    title: "Encourages Independent Learning",
    text: "Spelly is easy to use, allowing kids to practice on their own without needing constant supervision.",
  },
];
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

.footerCTAGradient {
  background: rgba(255, 255, 255, 0.35);
}
</style>
