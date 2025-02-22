<template>
  <!-- Hero Section -->
  <section class="text-center bg-section3 pb-16">
    <v-img :src="props.resource.image" height="300" cover> </v-img>
    <v-breadcrumbs :items="breadcrumbs" class="px-0 mb-8 ml-4"></v-breadcrumbs>
    <h1 class="sectionContainer text-h1 mt-8">{{ props.resource.title }}</h1>
    <div
      class="sectionContainer text-left"
      v-html="parseMarkdown(props.resource.description)"
    ></div>
    <Shapedivider :color="theme.current.value.colors.white" position="bottom" :flip="true" />
  </section>
  <!-- End Hero Section -->

  <Head>
    <Title>{{ props.resource.meta.title }}</Title>
    <Meta name="description" :content="props.resource.meta.description" />
    <Meta name="keywords" :content="props.resource.meta.keywords" />
  </Head>

  <!-- Render Sections Dynamically -->
  <section
    v-for="section in props.resource.content"
    :key="section.heading"
    class="bg-white text-body-1"
  >
    <!-- Content Section -->
    <div class="sectionContainer">
      <!-- H2 -->
      <SectionH2 v-if="section.h2" :text="section.h2" />

      <!-- H3-->
      <SectionH3 v-if="section.h3" :text="section.h3" />

      <!-- Paragraph -->
      <Paragraph v-if="section.paragraph" :paragraph="section.paragraph"></Paragraph>

      <!-- List Items -->
      <Lists v-if="section.list" :items="section.list"></Lists>

      <!-- Table Section -->
      <SectionTable v-if="section.table" :table="section.table"></SectionTable>

      <!-- button -->
      <SectionButton v-if="section.button" :button="section.button"></SectionButton>

      <!-- Callout -->
      <SectionCallout v-if="section.callout" :callout="section.callout"></SectionCallout>

      <!-- Text Link-->
      <!-- <div v-if="section.link" class="mt-1 text-center">
        <v-btn color="secondary" :to="section.link.url" class="elevatedButton">
          {{ section.link.text }}
        </v-btn>
      </div> -->

      <!-- FAQ Section-->
      <Faqs v-if="section.faq" :items="section.faq"></Faqs>
    </div>
  </section>

  <section v-if="props.resource.spellyPlug">
    <FooterCTA
      :title="props.resource.spellyPlug.heading"
      :subTitle="props.resource.spellyPlug.text"
      :buttonText="props.resource.spellyPlug.cta_button.text"
      :topShapeDividerColor="theme.current.value.colors.white"
    />
  </section>
</template>

<script setup>
  import Shapedivider from '../components/common/shapeDivider.vue'
  import { useRoute } from 'vue-router'
  import { marked } from 'marked' // Import markdown parser
  import FooterCTA from '../components/FooterCTA.vue'
  import { useTheme } from 'vuetify'
  import Lists from './sections/lists.vue'
  import Faqs from './sections/faqs.vue'
  import SectionTable from './sections/sectionTable.vue'
  import SectionH2 from './sections/sectionH2.vue'
  import SectionH3 from './sections/sectionH3.vue'
  import Paragraph from './sections/paragraph.vue'
  import Button from './sections/sectionButton.vue'
  import SectionButton from './sections/sectionButton.vue'
  import SectionCallout from './sections/sectionCallout.vue'

  const theme = useTheme()
  const route = useRoute()

  const props = defineProps({
    resource: Object
  })

  const { breadcrumbs } = useBreadcrumbs()
  // SEO Meta Tags
  useHead({
    title: props.resource.meta.title,
    meta: [
      { name: 'description', content: props.resource.meta.description },
      { name: 'keywords', content: props.resource.meta.keywords },
      { property: 'og:title', content: props.resource.meta.title },
      {
        property: 'og:description',
        content: props.resource.meta.description
      },
      {
        property: 'og:url',
        content: `https://getspelly.com/images/content/resources/${route.params.slug}`
      }
    ]
  })

  const parseMarkdown = text => {
    return text ? marked.parse(text) : ''
  }
</script>
