<template>
  <v-row
    :class="mobile ? '' : 'mx-16'"
    align="center"
    v-for="(benefit, i) in kidsBenefits"
    :key="i"
  >
    <template v-if="i % 2 === 0">
      <!-- Odd rows -->
      <v-col cols="12" sm="6" :order="mobile ? 'first' : ''">
        <div class="d-flex justify-end">
          <v-img :src="benefit.image"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div :class="mobile ? '' : 'ml-12'">
          <v-card elevation="0">
            <v-card-item>
              <v-chip
                variant="outlined"
                color="secondary"
                :prepend-icon="benefit.icon"
                class="px-4"
              >
                <span class="text-default text-caption">{{
                  benefit.chipText
                }}</span>
              </v-chip>
            </v-card-item>
            <v-card-item>
              <h4 class="text-h4">{{ benefit.title }}</h4>
            </v-card-item>
            <v-card-text>
              {{ benefit.text }}
            </v-card-text>
            <v-card-text>
              <v-btn class="elevatedButton" color="primary"
                >Start Learning</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </template>

    <template v-else>
      <!-- Even Rows -->
      <v-col cols="12" sm="6">
        <div :class="mobile ? '' : 'ml-12'">
          <v-card elevation="0">
            <v-card-item>
              <v-chip
                variant="outlined"
                color="secondary"
                :prepend-icon="benefit.icon"
                class="px-4"
              >
                <span class="text-default text-caption">{{
                  benefit.chipText
                }}</span>
              </v-chip>
            </v-card-item>
            <v-card-item>
              <h4 class="text-h4">{{ benefit.title }}</h4>
            </v-card-item>
            <v-card-text>
              {{ benefit.text }}
            </v-card-text>
            <v-card-text>
              <v-btn class="elevatedButton" color="primary"
                >Start Learning</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" sm="6" :order="mobile ? 'first' : ''">
        <div class="d-flex justify-end">
          <v-img :src="benefit.image"></v-img>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { mobile, md, lg, lgAndUp } = useDisplay();
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
</script>
