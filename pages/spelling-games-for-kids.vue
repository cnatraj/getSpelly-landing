<template>
  <!-- Hero Section -->
  <section class="hero pa-4 pb-16">
    <TopNav />
    <div class="container">
      <h1>🎮 Fun & Interactive Spelling Games for Kids!</h1>
      <p>
        Learning to spell has never been this fun! <strong>Spelly</strong> turns
        spelling into an exciting adventure with
        <strong>interactive spelling games</strong> that help kids build
        confidence and master words effortlessly.
      </p>

      <v-btn
        class="elevatedButton mt-8"
        color="primary"
        size="x-large"
        @click="goToApp"
        >🎮 Start Playing Now</v-btn
      >

      <!-- Features Section -->
      <div class="mt-4 text-subtitle-2">
        <span>🆓 Free to Play</span> | <span>👦 Best for Ages 6-12</span> |
        <span>🏆 Fun & Educational</span>
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
      <h2>Why Kids Love Our Spelling Games</h2>
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
      <h2>How Our Spelling Games Work</h2>
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
      title="Start Playing Spelling Games Today!"
      sub-title="Ready to make spelling fun? Play now and watch your spelling skills
        improve with each game!"
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
  title: "Spelling Games for Kids - Fun & Interactive Word Games",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Play fun and interactive spelling games for kids! Improve spelling skills through engaging activities, word games, and online challenges.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "spelling games for kids, fun spelling games, interactive spelling activities, online spelling games, educational spelling games, word games for kids",
    },
  ],
});

// Benefits of playing spelling games
const spellingGameBenefits = [
  {
    icon: "✅",
    title: "Interactive Learning",
    description: "Kids learn while having fun with word games.",
  },
  {
    icon: "✅",
    title: "Engaging Challenges",
    description: "Unlock new levels and earn rewards for correct answers.",
  },
  {
    icon: "✅",
    title: "Adaptive Difficulty",
    description: "Games adjust based on skill level for personalized learning.",
  },
  {
    icon: "✅",
    title: "Perfect for Spelling Bees",
    description: "Practice spelling words used in competitions.",
  },
  {
    icon: "✅",
    title: "Easy & Free to Play",
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
    description: "Spell it out and submit your answer.",
  },
  {
    icon: "🏆",
    title: "Step 3: Get Feedback & Rewards",
    description: "See if you got it right and earn points!",
  },
];

// Who can play these spelling games?
const whoCanPlay = [
  {
    icon: "🧒",
    title: "Kids Learning to Spell",
    description: "Great for young learners who want to improve spelling.",
  },
  {
    icon: "🏆",
    title: "Spelling Bee Contestants",
    description: "Practice for competitions with real-word challenges.",
  },
  {
    icon: "👨‍👩‍👦",
    title: "Parents & Homeschoolers",
    description: "A fun, interactive way to reinforce spelling at home.",
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
    #ffcc80,
    #ff7043
  ); /* Warm & playful gradient */
}
</style>
