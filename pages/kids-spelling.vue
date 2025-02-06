<template>
  <!-- Hero Section -->
  <section class="hero pa-4 pb-16">
    <TopNav />
    <div class="container">
      <h1>📝 Fun & Easy Kids Spelling Games!</h1>
      <p>
        Learning spelling has never been easier! Our
        <strong>kids spelling games</strong>
        help children master words, improve vocabulary, and boost confidence—all
        while having fun!
      </p>

      <v-btn
        class="elevatedButton mt-10"
        color="primary"
        size="x-large"
        @click="goToApp"
        >🎮 Start Learning Now</v-btn
      >

      <!-- Features Section -->
      <div class="mt-4">
        <span>🆓 Free & Fun</span> | <span>👦 Best for Ages 6-12</span> |
        <span>🎯 Fun & Educational</span>
      </div>
    </div>
    <Shapedivider
      :color="theme.current.value.colors.section1"
      position="bottom"
      :flip="true"
    />
  </section>

  <!-- Why Choose Spelly for Kids Spelling? -->
  <section class="py-8 bg-section1">
    <div class="container">
      <h2>Why Kids Love Learning Spelling with Spelly</h2>
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
      <h2>How Spelly Helps Kids Learn Spelling</h2>
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
      <h2 class="mb-4">Who Can Use Spelly for Kids Spelling?</h2>
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
      title="Start Learning Spelling with Spelly Today!"
      sub-title="Make spelling fun and engaging for your child! Start now and build strong spelling skills through play."
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
  title: "Kids Spelling - Fun & Interactive Spelling Practice for Kids",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Improve kids' spelling skills with fun and engaging word games! Spelly offers interactive spelling practice for children, making learning enjoyable and effective.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "kids spelling, spelling for kids, fun spelling games, spelling words for children, interactive spelling practice, educational spelling activities",
    },
  ],
});

// Benefits of learning spelling with Spelly
const spellingGameBenefits = [
  {
    icon: "✅",
    title: "Fun & Interactive",
    description: "Kids learn while playing exciting word games.",
  },
  {
    icon: "✅",
    title: "Boosts Spelling Skills",
    description: "Master spelling through engaging practice sessions.",
  },
  {
    icon: "✅",
    title: "Designed for All Ages",
    description: "Perfect for beginners and advanced learners.",
  },
  {
    icon: "✅",
    title: "Perfect for Schools & Home",
    description: "Ideal for both classroom and home learning.",
  },
  {
    icon: "✅",
    title: "Free & Easy to Use",
    description: "No sign-ups needed—just start playing!",
  },
];

// Steps to play the game
const spellingGameSteps = [
  {
    icon: "🔊",
    title: "Step 1: Hear the Word",
    description: "Listen carefully as the game pronounces a word.",
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

// Who can use these spelling activities?
const whoCanPlay = [
  {
    icon: "🧒",
    title: "Young Learners",
    description: "Great for kids beginning to learn spelling.",
  },
  {
    icon: "🏆",
    title: "Spelling Bee Champions",
    description: "Practice for competitions with real spelling challenges.",
  },
  {
    icon: "👨‍👩‍👦",
    title: "Parents & Homeschoolers",
    description: "A fun and effective way to teach spelling at home.",
  },
  {
    icon: "📚",
    title: "Teachers & Schools",
    description: "Perfect for classroom learning and spelling assessments.",
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
  background: linear-gradient(
    135deg,
    #42a5f5,
    #4caf50
  ); /* Bright blue-green for a fun look */
}
</style>
