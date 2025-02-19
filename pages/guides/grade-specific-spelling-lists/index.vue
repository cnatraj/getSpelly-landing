<template>
  <!-- Hero Section -->
  <section class="bg-section1 pb-16">
    <v-img
      src="/images/content/grade-specific-spelling-lists.webp"
      height="300"
      cover
    >
      <Shapedivider
        position="bottom"
        :color="theme.current.value.colors.section1"
        :flip="true"
      />
    </v-img>

    <v-breadcrumbs :items="breadcrumbs" class="px-0 mb-8 ml-4"></v-breadcrumbs>
    <h1 class="text-h1 text-center mt-4">📖 Grade Specific Spelling Lists</h1>
    <p class="text-subtitle-1 text-center">
      Find the perfect spelling words for every grade level and improve
      vocabulary step by step.
    </p>
    <!-- <NuxtLink to="/resources/free-spelling-worksheets" class="cta-button">
        📥 Download Free Spelling Lists
      </NuxtLink> -->
    <Shapedivider
      position="bottom"
      :color="theme.current.value.colors.section2"
      :flip="false"
    />
  </section>

  <!-- Why Use Grade-Specific Spelling Lists? -->
  <section class="bg-section2 py-16">
    <div class="sectionContainer">
      <h2 class="text-h2 text-center">
        📌 Why Use Grade-Specific Spelling Lists?
      </h2>
      <p class="mt-4">
        Spelling words play a huge role in building a child's vocabulary,
        reading fluency, and writing confidence. By learning
        <strong>spelling words by grade level</strong>, students can:
      </p>
      <v-list class="bg-section2">
        <v-list-item>
          ✅ Master the <strong>correct spelling</strong> of common words.
        </v-list-item>
        <v-list-item>
          ✅ Build <strong>strong language skills</strong> with weekly spelling
          words.
        </v-list-item>
        <v-list-item>
          ✅ Improve <strong>reading comprehension</strong> and
          <strong>writing fluency</strong>.
        </v-list-item>
      </v-list>
      <Shapedivider
        position="bottom"
        :color="theme.current.value.colors.white"
        :flip="true"
      />
    </div>
  </section>

  <!-- Grade Sections -->
  <section class="bg-white py-16">
    <div class="sectionContainer">
      <h2 class="text-h2 mb-4 text-center">
        📌 Explore Spelling Words by Grade
      </h2>

      <v-row>
        <v-col cols="12" v-for="grade in gradeLevels" :key="grade.slug">
          <v-card variant="flat" class="bg-section3" rounded="xl">
            <v-card-title class="text-h5 font-weight-regular">
              {{ grade.title }}
            </v-card-title>
            <v-card-text class="text-medium-emphasis text-body-1">
              {{ grade.description }}
              <div
                class="d-flex border-lg border-dashed border-secondary rounded-lg pa-3 ma-3 align-center"
              >
                <div class="text-h2 mr-2">💡</div>
                <div>
                  <span class="font-weight-bold">Practice Tip:</span>
                  <div>{{ grade.tip }}</div>
                </div>
              </div>
            </v-card-text>

            <v-card-item>
              <v-row no-gutters>
                <v-col cols="4" v-for="word in grade.words" :key="word">
                  {{ word }}
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-actions>
              <v-btn
                :to="`/guides/grade-specific-spelling-lists/${grade.slug}`"
                block
                color="secondary"
                >Explore more {{ grade.title }} →</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <CommonShapeDivider
        :color="theme.current.value.colors.section2"
        position="bottom"
        :flip="true"
      />
    </div>
  </section>

  <!-- Download CTA -->
  <section class="bg-section2 py-16">
    <div class="sectionContainer">
      <h2 class="text-h2 mb-4 text-center">
        📥 Download Printable Spelling Lists
      </h2>
      <p>Want a ready-made spelling list? We’ve got you covered!</p>
      <v-list class="bg-section2">
        <v-list-item
          >🔹 <strong>Printable Spelling Lists by Grade</strong></v-list-item
        >
        <v-list-item
          >🔹 <strong>Weekly Spelling Word Lists</strong></v-list-item
        >
        <v-list-item
          >🔹
          <strong>Customizable Spelling Practice Sheets</strong></v-list-item
        >
      </v-list>
      <v-btn
        class="mx-auto"
        to="/resources/free-spelling-worksheets"
        color="secondary"
        >Download Now</v-btn
      >
    </div>
  </section>

  <!-- How Spelly Can Help -->
  <section class="bg-section3 py-16">
    <div class="mt-4 sectionContainer">
      <h2 class="mx-10 text-center">
        🚀 How Spelly Can Help With Grade-Specific Spelling
      </h2>
      <p class="text-center text-body-1 mt-2">
        Looking for a fun and interactive way to improve spelling skills?
      </p>
      <p class="text-center text-body-1 mt-2">
        Spelly makes learning spelling words engaging for students of all grade
        levels.
      </p>
      <v-list class="bg-section3">
        <v-list-item>
          🎮 <strong>Interactive Spelling Games</strong> – Play fun spelling
          challenges by grade level.</v-list-item
        >
        <v-list-item>
          📝 <strong>Custom Spelling Tests</strong> – Create personalized
          spelling tests with words from our lists.</v-list-item
        >
        <v-list-item>
          📊 <strong>Track Progress</strong> – See real-time improvements in
          spelling accuracy.</v-list-item
        >
        <v-list-item>
          🔊 <strong>Audio Pronunciations</strong> – Hear words spoken aloud to
          reinforce correct spelling.</v-list-item
        >
        <v-list-item>
          Spelly is perfect for parents, teachers, and students looking to make
          spelling fun and effective!</v-list-item
        >
      </v-list>
      <div class="text-center">
        <v-btn
          class="elevatedButton mt-8"
          color="primary"
          size="x-large"
          @click="goToApp"
          >🎯 Try Spelly for Free</v-btn
        >
      </div>
    </div>

    <CommonShapeDivider
      :color="theme.current.value.colors.white"
      position="bottom"
      :flip="true"
    />
    <CommonShapeDivider
      :color="theme.current.value.colors.section2"
      position="top"
      :invert="true"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Shapedivider from "../components/common/shapeDivider.vue";
import { useAppNavigation } from "../composables/useAppNavigation";
import { useDisplay, useTheme } from "vuetify";
import {
  fifthGradeWords,
  firstGradeWords,
  fourthGradeWords,
  kindergartenWords,
  secondGradeWords,
  thirdGradeWords,
} from "../../data/sampleWords";

const theme = useTheme();
// Get app navigation
const { goToApp } = useAppNavigation();
const { breadcrumbs } = useBreadcrumbs();

const heroImage = new URL("/assets/images/hero-section-bg.jpg", import.meta.url)
  .href;

useHead({
  title: "Grade-Specific Spelling Lists | Spelly – Spelling Words for Kids",
  meta: [
    {
      name: "description",
      content:
        "Explore grade-specific spelling lists for Kindergarten to 5th grade. Download free spelling word lists and worksheets to help kids improve their spelling skills.",
    },
    {
      name: "keywords",
      content:
        "spelling lists, grade-specific spelling words, spelling words for kids, spelling word lists by grade, spelling practice, kindergarten spelling, 1st grade spelling words, 2nd grade spelling lists, 3rd grade spelling, 4th grade spelling words, 5th grade spelling lists",
    },
    {
      property: "og:title",
      content:
        "Grade-Specific Spelling Lists | Spelly – Spelling Words for Kids",
    },
    {
      property: "og:description",
      content:
        "Explore grade-specific spelling lists for Kindergarten to 5th grade. Download free spelling word lists and worksheets to help kids improve their spelling skills.",
    },
    // {
    //   property: "og:image",
    //   content:
    //     "https://getspelly.com/images/grade-specific-spelling-lists-preview.png",
    // },
    {
      property: "og:url",
      content: "https://getspelly.com/guides/grade-specific-spelling-lists/",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Grade-Specific Spelling Lists | Spelly – Spelling Words for Kids",
    },
    {
      name: "twitter:description",
      content:
        "Explore grade-specific spelling lists for Kindergarten to 5th grade. Download free spelling word lists and worksheets to help kids improve their spelling skills.",
    },
    // {
    //   name: "twitter:image",
    //   content:
    //     "https://getspelly.com/images/grade-specific-spelling-lists-preview.png",
    // },
  ],
});

// Grade-Level Data
const gradeLevels = ref([
  {
    slug: "1st-grade-spelling-words",
    title: "🎈 1st Grade Spelling Words",
    description:
      "Short words that build strong spelling foundations. First-grade spelling words introduce short vowel sounds, blends (br, cr, st), and high-frequency sight words. This grade level emphasizes word recognition and basic sentence formation.",
    words: firstGradeWords,
    tip: "Write words in different colors to make spelling more visually engaging. Create simple fill-in-the-blank sentences using the spelling words to reinforce meaning and context.",
  },
  {
    slug: "2nd-grade-spelling-words",
    title: "✏️ 2nd Grade Spelling Words",
    description:
      "Common words with easy spelling patterns. Second-grade spelling lists introduce silent letters (kn, wr, gn), long vowel rules, and common blends. Students also start recognizing compound words and frequently used homophones.",
    words: secondGradeWords,
    tip: "Encourage students to create word families by grouping words with similar spelling patterns. Playing spelling bingo with family or classmates can also reinforce learning.",
  },
  {
    slug: "3rd-grade-spelling-words",
    title: "📖 3rd Grade Spelling Words",
    description:
      "Expanding vocabulary with slightly complex words. Third-grade spelling focuses on multisyllabic words, irregular spelling patterns, and words with silent vowels. At this level, students also start mastering common suffixes and prefixes.",
    words: thirdGradeWords,
    tip: "Use crossword puzzles and word searches to make spelling practice more engaging. Encourage children to write short stories incorporating their weekly spelling words.",
  },
  {
    slug: "4th-grade-spelling-words",
    title: "🏆 4th Grade Spelling Words",
    description:
      "More challenging spelling words for stronger writing skills. Fourth-grade spelling lists introduce harder phonics rules, prefixes and suffixes, and frequently used academic words. Students also begin to recognize spelling variations across words with similar roots.",
    words: fourthGradeWords,
    tip: "Encourage students to create flashcards with definitions and example sentences for each spelling word. Using the words in daily conversations and journal writing helps reinforce retention.",
  },
  {
    slug: "5th-grade-spelling-words",
    title: "🚀 5th Grade Spelling Words",
    description:
      "Advanced words with spelling rules and patterns. Fifth-grade spelling lists focus on academic vocabulary, abstract words, and words with multiple syllables. This level also emphasizes spelling rules for suffixes and complex phonetic patterns.",
    words: fifthGradeWords,
    tip: "Create a weekly spelling journal, where they write each word in a sentence or paragraph. Practicing peer quizzes and spelling games with friends can also make learning interactive and fun.",
  },
]);

const activeGrade = ref(null);

const toggleGrade = (slug) => {
  activeGrade.value = activeGrade.value === slug ? null : slug;
};
</script>

<style scoped>
.sectionContainer {
  max-width: 800px;
  margin: auto;
}
</style>
