<template>
  <!-- Hero Section -->
  <section class="pa-4 pb-16 bg-section2">
    <TopNav />
    <div class="mx-16 text-center">
      <h1 class="">🎮 Spelly – The Ultimate Spelling Game for Kids 🎉</h1>
      <p class="text-body-1">
        Make <strong>learning spelling</strong> exciting with Spelly! Your child
        might be preparing for a <strong>spelling bee</strong>, practicing
        <strong>spelling</strong>, or preparing for a for a
        <strong>spelling test</strong>. Our fun
        <strong>spelling games</strong> will keep them engaged.
      </p>

      <v-btn
        class="elevatedButton mt-8"
        color="primary"
        size="x-large"
        @click="goToApp"
        >Start Playing Now</v-btn
      >
      <div class="mt-4 text-caption">
        <span>🆓 Free</span> | <span>👦 Best for Ages 6-12</span> |
        <span>🎉 100% Fun Learning</span>
      </div>
      <CommonShapeDivider
        :color="theme.current.value.colors.white"
        position="bottom"
        :flip="true"
      />
    </div>
  </section>

  <!-- Why Choose Spelly -->
  <section class="why-spelly">
    <div class="container">
      <h2 class="mb-10">Why Kids & Parents Love Spelly</h2>
      <v-list class="text-left">
        <v-list-item>
          ✅ <strong>Fun Word Games</strong> – Keep students engaged while
          learning new spelling words.
        </v-list-item>
        <v-list-item>
          ✅ <strong>Spelling Lists & Word Lists</strong> – Practice from
          pre-made lists or create custom ones.
        </v-list-item>
        <v-list-item>
          ✅ <strong>Online Spelling Games</strong> – Perfect for at-home
          learning and school practice.
        </v-list-item>
        <v-list-item>
          ✅ <strong>Spelling Bee Training</strong> – Get ready for competitions
          with challenging spelling tests.
        </v-list-item>
        <v-list-item>
          ✅ <strong>Designed for All Levels</strong> – From
          <strong>1st grade spelling words</strong> to advanced vocabulary.
        </v-list-item>
      </v-list>
      <Shapedivider
        position="bottom"
        :color="theme.current.value.colors.section1"
        :flip="true"
      />
    </div>
  </section>

  <!-- How It Works -->
  <section class="bg-section1 py-16">
    <div class="px-10 text-center">
      <h2 class="mb-10">How Spelly Makes Learning Fun</h2>

      <v-row justify="center" class="mb-4">
        <v-col cols="auto" v-for="(item, i) in howItWorks" :key="i">
          <v-card
            width="250"
            min-height="225"
            rounded="lg"
            bg-color="white"
            elevation="0"
            class="py-2 mx-2 elevatedCard text-left"
          >
            <v-card-item class="pb-0">
              <v-icon :icon="item.icon" color="primary" size="large"></v-icon>
            </v-card-item>
            <v-card-item class="text-default text-h6">
              {{ item.title }}
            </v-card-item>
            <v-card-text class="text-default">
              {{ item.text }}
            </v-card-text>
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

  <!-- Who Can Play -->
  <section class="who-can-play bg-section2">
    <div class="container">
      <h2 class="mb-10">Who is Spelly For?</h2>
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

      <Shapedivider
        position="bottom"
        :color="theme.current.value.colors.white"
      />
    </div>
  </section>

  <section class="word-games">
    <div class="container">
      <h2>Play Word Games & Word Search</h2>
      <p>
        Enjoy interactive <strong>word search games</strong> and other spelling
        challenges.
      </p>
    </div>
  </section>

  <!-- CTA Section -->
  <FooterCTA
    top-shape-divider-color="#FFFFFF"
    title="Try the Best Spelling Game Today!"
    sub-title="Start playing today and improve spelling words, spelling tests, and
          spelling lists in a fun way!"
    button-text="Start Learning"
  />
</template>

<script setup>
import TopNav from "../components/TopNav.vue";
import { useAppNavigation } from "../composables/useAppNavigation";
import Shapedivider from "../components/common/shapeDivider.vue";
import { useDisplay, useTheme } from "vuetify";
import FooterCTA from "../components/FooterCTA.vue";

useHead({
  title: "Spelly - Fun & Interactive Spelling Games for Students",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Spelly is the ultimate spelling game for students! Practice spelling words, spelling tests, and word lists through fun and engaging online spelling games.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "spelling games, spelling word, word games, online spelling games, spelling bee, correct spelling, 3rd grade, spelling test, learning spelling, word search",
    },
  ],
});

// Get app navigation
const { goToApp } = useAppNavigation();
const { mobile, md, lg, lgAndUp } = useDisplay();

const footerCTA = new URL("../assets/images/footerCTA-bg.jpg", import.meta.url)
  .href;

// Get theme instance
const theme = useTheme();

const howItWorks = [
  {
    icon: "mdi-alphabetical",
    title: "Step 1: Hear the Spelling Word",
    text: "The game pronounces a word to help students spell words correctly.",
  },
  {
    icon: "mdi-pencil-outline",
    title: "Step 2: Type the Correct Spelling",
    text: "Type the word, check your answer, and keep leveling up!",
  },
  {
    icon: "mdi-trophy-outline",
    title: "Step 3: Take Spelling Tests & Earn Rewards",
    text: "Kids complete fun spelling tests and earn badges to stay motivated.",
  },
];

const whoCanPlay = [
  {
    icon: "🧒",
    title: "Students Spelling Practice",
    description: "From beginners to advanced learners.",
  },
  {
    icon: "🏡",
    title: "Homeschoolers & Parents",
    description: "A fun way to reinforce learning spelling.",
  },
  {
    icon: "🏆",
    title: "Spelling Bee Participants",
    description: "Perfect for those preparing for a spelling bee.",
  },
  {
    icon: "📚",
    title: "Teachers & Schools",
    description: "Create custom spelling lists and track progress.",
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
  background: #ffeb3b;
  padding: 0px 20px;
  border-radius: 10px;
}
.cta-button {
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}
.why-spelly,
.how-it-works,
.who-can-play,
.word-games,
.cta-section {
  padding: 30px 20px;
  background: white;
}

.steps {
  display: flex;
  flex-direction: column;
}
.step {
  background: #f8f9fa;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.footerCTAGradient {
  background: rgba(255, 255, 255, 0.35);
}
</style>
