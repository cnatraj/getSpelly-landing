<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col>
        <v-img :src="logo" :width="100" class="" />
      </v-col>
    </v-row>

    <v-row class="text-default" align="start" no-gutters>
      <v-col cols="12" sm="6">
        <p class="text-h5">The fun way to learn how to spell!</p>

        <p class="mt-2">
          <NuxtLink
            v-for="(item, i) in footerLinks"
            index="i"
            :to="item.link"
            class="text-subtitle-2 text-tertiary footerLink mr-2"
            >{{ item.text }}</NuxtLink
          >
        </p>
        <div class="mt-4">
          <p class="text-subtitle-2 mb-2 ml-4">Join our community</p>
          <v-text-field
            placeholder="Your email address"
            rounded="pill"
            variant="solo"
            flat
            bg-color="#FAFAFB"
          >
            <template v-slot:append-inner>
              <v-btn rounded="pill" elevation="0" color="primary">Join</v-btn>
            </template>
          </v-text-field>
        </div>
        <div class="mt-4">
          <NuxtLink
            v-for="item in terms"
            :to="item.link"
            :key="item.text"
            class="text-subtitle-2 text-tertiary footerLink mr-2"
            >{{ item.text }}</NuxtLink
          >
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="d-flex">
          <div class="footerContentLinks mr-4">
            <div class="text-body-1 font-weight-bold text-medium-emphasis">Guides</div>
            <div
              class="text-subtitle-2 text-medium-emphasis text-secondary"
              v-for="(resource, i) in guides"
            >
              <NuxtLink :to="resource.link" class="footerLink">{{ resource.text }}</NuxtLink>
            </div>
          </div>
          <div class="footerContentLinks">
            <div class="text-body-1 font-weight-bold text-medium-emphasis">Resources</div>
            <div
              class="text-subtitle-2 text-medium-emphasis text-secondary"
              v-for="(resource, i) in resources"
            >
              <NuxtLink :to="resource.link" class="footerLink">{{ resource.text }}</NuxtLink>
            </div>
          </div>
        </div>
        <p class="mt-2 text-body-2">© 2025 Spelly. All rights reserved.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const logo = new URL('../assets/images/spellyLogo.png', import.meta.url).href

  const footerLinks = [
    {
      link: '/spelling-games',
      text: 'Spelling Games'
    },
    {
      link: '/spelling-test',
      text: 'Spelling Test'
    },
    {
      link: '/spelling-games-for-kids',
      text: 'Spelling Games for Kids'
    },
    {
      link: '/kids-spelling',
      text: 'Kids Spelling'
    },
    {
      link: '/childrens-spelling-games',
      text: "Children's spelling games"
    }
  ]

  const guides = [
    {
      link: '/guides/grade-specific-spelling-lists',
      text: 'Grade-Specific Spelling Lists'
    }
  ]
  const resources = [
    {
      link: '/resources/free-spelling-worksheets',
      text: 'Free Spelling Worksheets'
    },
    {
      link: '/resources/spelling-lists',
      text: 'Spelling Lists'
    },
    {
      link: '/resources/spelling-bee',
      text: 'Spelling Bee'
    },
    {
      link: '/resources/commonly-misspelled-words',
      text: 'Commonly Misspelled Words'
    }
  ]

  const terms = [
    { link: '/terms', text: 'Terms' },
    { link: '/privacy', text: 'Privacy' }
  ]
</script>

<style scoped>
  .footerContentLinks {
    max-width: 200px;
  }
</style>
