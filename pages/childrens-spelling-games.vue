<template>
  <!-- Hero Section -->
  <section class="hero pa-4 pb-16">
    <TopNav />
    <div class="container">
      <h1>🧒 Fun & Interactive Children's Spelling Games!</h1>
      <p>
        Let your child discover the joy of spelling with
        <strong>fun and engaging word games</strong>! Our
        <strong>children’s spelling games</strong> help improve vocabulary,
        boost confidence, and make learning an adventure.
      </p>

      <v-btn
        class="elevatedButton mt-10"
        color="secondary"
        size="x-large"
        @click="goToApp"
        >🎮 Start Playing Now</v-btn
      >

      <!-- Features Section -->
      <div class="mt-4">
        <span>🆓 Free & Fun</span> | <span>👦 Best for Ages 6-12</span> |
        <span>🎯 Interactive & Engaging</span>
      </div>
    </div>
    <Shapedivider
      :color="theme.current.value.colors.section1"
      position="bottom"
      :flip="true"
    />
  </section>

  <!-- Why Choose Spelly? -->
  <section class="py-8 bg-section1">
    <div class="container">
      <h2>Why Children Love Our Spelling Games</h2>
      <v-list class="text-left" bg-color="section1">
        <v-list-item v-for="(item, i) in spellingGameBenefits" :key="i">
          {{ item.icon }} <strong>{{ item.title }}</strong> –
          {{ item.description }}
        </v-list-item>
      </v-list>
    </div>
    <Shapedivider
      :color="theme.current.value.colors.section2"
      position="bottom"
    />
  </section>

  <!-- How It Works -->
  <section class="bg-section2 py-8">
    <div class="container">
      <h2>How Our Children's Spelling Games Work</h2>
      <v-row justify="center" class="my-4">
        <v-col cols="auto" v-for="(item, i) in spellingGameSteps" :key="i">
          <v-card
            width="220"
            min-height="225"
            rounded="lg"
            bg-color="white"
            elevation="0"
            class="py-2 mx-2 elevatedCard text-left"
          >
            <v-card-item class="text-default text-h6">
              {{ item.title }}
            </v-card-item>
            <v-card-text class="text-default">
              {{ item.description }}
            </v-card-text>
            <v-card-item class="pb-0 text-center text-h1">
              {{ item.icon }}
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <Shapedivider
        position="bottom"
        :color="theme.current.value.colors.section2"
        :flip="true"
      />
    </div>
  </section>

  <!-- Who Can Play? -->
  <section class="bg-white py-8">
    <div class="container">
      <h2 class="mb-4">Who Can Play Our Spelling Games?</h2>
      <v-row class="mb-4">
        <v-col cols="12" md="6" v-for="(item, i) in whoCanPlay" :key="i">
          <v-list class="text-left bg-section2">
            <v-list-item>
              <div class="text-h6 text-secondary">
                {{ item.icon }} {{ item.title }}
              </div>
              <div class="">
                {{ item.description }}
              </div>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
  </section>

  <!-- Call to Action -->
  <section>
    <!-- CTA Section -->
    <FooterCTA
      top-shape-divider-color="#FFFFFF"
      title="Start Playing Children's Spelling Games Today!"
      sub-title="Ready to turn learning into fun? Let your child play now and improve their spelling skills effortlessly!"
      button-text="🎮 Play Now for FREE"
    />
  </section>
</template>

<script setup>
import Shapedivider from "../components/common/shapeDivider.vue";
import { useDisplay, useTheme } from "vuetify";
import FooterCTA from "../components/FooterCTA.vue";

const { goToApp } = useAppNavigation();
// Get theme instance
const theme = useTheme();

useHead({
  title: "Children's Spelling Games - Fun & Educational Word Games",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Play fun and interactive children's spelling games! Improve spelling skills through engaging activities, word games, and online spelling challenges.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "children's spelling games, fun spelling games for kids, spelling word games, online spelling games for children, educational spelling games, interactive spelling activities",
    },
  ],
});

// Benefits of playing spelling games
const spellingGameBenefits = [
  {
    icon: "✅",
    title: "Fun & Engaging",
    description: "Kids love learning through interactive word games.",
  },
  {
    icon: "✅",
    title: "Boosts Spelling Skills",
    description: "Improve spelling with exciting challenges.",
  },
  {
    icon: "✅",
    title: "Educational & Entertaining",
    description: "Perfect for school and home learning.",
  },
  {
    icon: "✅",
    title: "Designed for All Levels",
    description: "Games adapt to your child's spelling ability.",
  },
  {
    icon: "✅",
    title: "Free & Easy to Play",
    description: "No downloads required—just start playing!",
  },
];

// Steps to play the game
const spellingGameSteps = [
  {
    icon: "🔊",
    title: "Step 1: Hear the Word",
    description: "Listen to the word pronunciation carefully.",
  },
  {
    icon: "⌨️",
    title: "Step 2: Type the Word",
    description: "Spell it out and check your answer.",
  },
  {
    icon: "🏆",
    title: "Step 3: Earn Rewards & Level Up",
    description: "Unlock badges and progress through levels!",
  },
];

// Who can play these spelling games?
const whoCanPlay = [
  {
    icon: "🧒",
    title: "Young Learners",
    description: "Great for kids starting to learn spelling.",
  },
  {
    icon: "🏆",
    title: "Spelling Bee Champions",
    description: "Practice for competitions with real spelling challenges.",
  },
  {
    icon: "👨‍👩‍👦",
    title: "Parents & Homeschoolers",
    description: "A fun and effective way to learn at home.",
  },
  {
    icon: "📚",
    title: "Teachers & Schools",
    description: "Use it as an educational spelling resource in class.",
  },
];
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

.hero {
  background: linear-gradient(135deg, #ffeb3b, #ff9800);
}
</style>
