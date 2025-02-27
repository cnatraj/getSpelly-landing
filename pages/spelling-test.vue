<template>
  <section class="pa-4 pb-16 hero">
    <TopNav />
    <div class="mx-10 text-center">
      <h1 class="">📝 Free Spelling Test Online</h1>
      <p class="text-h5">Improve Your Spelling Skills Now!</p>

      <p class="text-h5 mt-2">
        📢 Test your spelling skills with our fun and interactive online spelling test!
      </p>

      <v-btn class="elevatedButton mt-8" color="primary" size="x-large" @click="goToApp"
        >📝 Free Spelling Test</v-btn
      >
      <div class="mt-4 text-subtitle-2">
        <span>🆓 Free</span> | <span>👦 Best for Ages 6-12</span> |
        <span>⚡ Instant Feedback</span>
      </div>
      <Shapedivider :color="theme.current.value.colors.section3" position="bottom" :flip="true" />
    </div>
  </section>

  <!-- Spelly Intro -->
  <section class="bg-section3 pb-10">
    <div class="container">
      <h2 class="pb-8">See Spelly in action</h2>
      <div class="mb-4">
        <YTEmbed videoId="2Db_DaxKrWs"></YTEmbed>
      </div>
      <Shapedivider :color="theme.current.value.colors.white" position="bottom" :flip="false" />
    </div>
  </section>

  <!-- Why Choose Spelly for Spelling Tests? -->
  <section class="bg-white pb-10">
    <div class="container">
      <h2>Why Try Our Spelling Test?</h2>
      <v-list class="text-left">
        <v-list-item v-for="(item, i) in spellingTestBenefits" :key="i">
          {{ item.icon }} <strong>{{ item.title }}</strong> –
          {{ item.description }}
        </v-list-item>
      </v-list>
    </div>
    <Shapedivider position="bottom" :color="theme.current.value.colors.section2" :flip="true" />
  </section>

  <!-- How It Works -->
  <section class="bg-section2 py-16">
    <div class="px-10 text-center">
      <h2>How Our Spelling Test Works</h2>

      <v-row justify="center" class="my-4">
        <v-col cols="auto" v-for="(item, i) in spellingTestSteps" :key="i">
          <v-card
            width="250"
            min-height="225"
            rounded="lg"
            bg-color="section1"
            elevation="0"
            class="py-2 mx-2 elevatedCard text-left bg-section2"
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
      <Shapedivider position="bottom" :color="theme.current.value.colors.white" :flip="true" />
    </div>
  </section>

  <!-- Who Should Take This Spelling Test? -->
  <section class="who-can-play bg-white">
    <div class="container">
      <h2 class="mb-4">Who Is This Spelling Test For?</h2>
      <v-row class="mb-4">
        <v-col cols="12" md="6" v-for="(item, i) in whoShouldTakeTest" :key="i">
          <v-list class="text-left bg-section2">
            <v-list-item>
              <div class="text-h6 text-secondary">{{ item.icon }} {{ item.title }}</div>
              <div class="">
                {{ item.description }}
              </div>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-btn class="elevatedButton mt-8" color="primary" size="x-large" @click="goToApp"
        >📝 Start your Free Spelling Test</v-btn
      >
    </div>
  </section>

  <!-- FAQ -->
  <section class="who-can-play bg-white">
    <div class="container">
      <h2 class="mb-4">Frequently asked Questions</h2>
      <v-expansion-panels class="mt-4 pb-4">
        <v-expansion-panel
          v-for="(faq, i) in faqs"
          :key="i"
          :title="faq.question"
          :text="faq.answer"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
  <!-- CTA Section -->
  <FooterCTA
    top-shape-divider-color="#FFFFFF"
    title="Start Your Spelling Test Now!"
    sub-title="See how well you can spell and improve with every test. Are you
        ready?"
    button-text="Take the Test Now"
  />
</template>

<script setup>
  import Shapedivider from '../components/common/shapeDivider.vue'
  import { useDisplay, useTheme } from 'vuetify'
  import FooterCTA from '../components/FooterCTA.vue'
  import YTEmbed from '../components/YTEmbed.vue'

  const { goToApp } = useAppNavigation()
  // Get theme instance
  const theme = useTheme()

  useHead({
    title: 'Take a Free Spelling Test Online – Fun & Interactive for Kids (Ages 6-12)',
    meta: [
      {
        name: 'description',
        content:
          'Spelling Test - Perfect for Spelling Bee Practice. ✓ Online & Easy to Use – No downloads, just start spelling!'
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'Free Spelling Test Online – Fun & Interactive for Kids'
      },
      {
        property: 'og:description',
        content:
          'Improve spelling skills with our free online spelling test! Perfect for kids aged 6-12.'
      },
      {
        property: 'og:image',
        content: 'https://getspelly.com/images/spellySiteImage.jpg'
      },
      {
        property: 'og:url',
        content: 'https://getspelly.com/spelling-test'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Free Spelling Test Online – Fun & Interactive for Kids'
      },
      {
        name: 'twitter:description',
        content:
          'Take a free spelling test online! Improve spelling skills with interactive learning and instant feedback. Perfect for kids aged 6-12!'
      },
      {
        name: 'twitter:image',
        content: 'https://getspelly.com/images/spellySiteImage.jpg'
      },
      // Additional SEO tags
      {
        name: 'keywords',
        content:
          'spelling test online, free spelling test, online spelling quiz, spelling practice for kids, interactive spelling games, spelling bee preparation, spelling words test, improve spelling skills'
      },
      {
        name: 'author',
        content: 'GetSpelly'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://getspelly.com/spelling-test'
      }
    ]
  })

  // Who should take this test?
  const whoShouldTakeTest = [
    {
      icon: '🧒',
      title: 'Students',
      description: 'Perfect for school spelling practice.'
    },
    {
      icon: '🏆',
      title: 'Spelling Bee Contestants',
      description: 'Great for competition prep.'
    },
    {
      icon: '👨‍👩‍👦',
      title: 'Parents & Homeschoolers',
      description: 'A fun way to help kids practice at home.'
    },
    {
      icon: '📚',
      title: 'Teachers',
      description: 'Use it as an online spelling assessment in class.'
    }
  ]

  const spellingTestBenefits = [
    {
      icon: '✅',
      title: 'Instant Feedback',
      description: 'Know right away if you got the word right.'
    },
    {
      icon: '✅',
      title: 'Adaptive Difficulty',
      description: 'Words get tougher as you improve.'
    },
    {
      icon: '✅',
      title: 'Custom Word Lists',
      description: 'Choose from 3rd grade words to advanced vocabulary.'
    },
    {
      icon: '✅',
      title: 'Perfect for Spelling Bee Practice',
      description: 'Great for students prepping for a spelling competition.'
    },
    {
      icon: '✅',
      title: 'Online & Easy to Use',
      description: 'No downloads, just start spelling!'
    }
  ]

  const spellingTestSteps = [
    {
      icon: '🔊',
      title: '1: Hear the Word',
      description: 'The test reads out a word. Listen carefully!'
    },
    {
      icon: '⌨️',
      title: '2: Type Your Answer',
      description: 'Type the correct spelling and submit your answer.'
    },
    {
      icon: '🏆',
      title: '3: Get Instant Feedback',
      description: 'See if you got it right, and track your progress!'
    }
  ]

  const faqs = [
    {
      question: 'How can I improve my spelling skills?',
      answer:
        'Practicing with an online spelling test, using spelling lists, and correcting misspelled words can help improve your spelling skills quickly.'
    },
    {
      question: 'Is this spelling test free?',
      answer:
        'Yes! Our free spelling test is available for anyone who wants to improve their spelling skills without any cost.'
    },
    {
      question: 'What age group is this spelling website for?',
      answer:
        'Our spelling website is designed for kids aged 6-12, but anyone looking to improve their spelling skills can use it.'
    },
    {
      question: 'How does an online spelling test work?',
      answer:
        'An online spelling test reads a word aloud, the student spells it, and the system provides instant feedback on whether the word was spelled correctly.'
    },
    {
      question: 'What kind of word lists are available?',
      answer:
        'We offer beginner, intermediate, and advanced spelling lists, along with specialized lists for spelling bee preparation.'
    },
    {
      question: 'Can I track my child’s spelling progress?',
      answer:
        'Yes, our online spelling test provides instant feedback, allowing kids to see and correct misspelled words immediately.'
    },
    {
      question: 'How does this help with reading and writing?',
      answer:
        'Practicing spelling words strengthens word recognition, improves vocabulary, and enhances overall reading and writing skills.'
    }
  ]
</script>

<style scoped>
  .hero {
    background: linear-gradient(135deg, #ffcc80, #ff80ab);
  }
  .container {
    max-width: 800px;
    margin: auto;
    text-align: center;
    padding: 20px;
  }
</style>
