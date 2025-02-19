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
    <Shapedivider
      :color="theme.current.value.colors.white"
      position="bottom"
      :flip="true"
    />
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
    class="pt-16 bg-white text-body-1"
  >
    <!-- Content Section -->
    <div class="sectionContainer">
      <h3 v-if="section.headingTag === 'h3'" class="text-h4">
        {{ section.heading }}
      </h3>
      <h2 v-else class="text-h3">
        {{ section.heading }}
      </h2>

      <div
        class="mt-4"
        v-if="section.text"
        v-html="parseMarkdown(section.text)"
      ></div>

      <!-- Multi paragraph section-->

      <Paragraphs
        v-if="section.paragraphs"
        :paragraphs="section.paragraphs"
      ></Paragraphs>

      <!-- List Items -->
      <Lists v-if="section.list" :items="section.list"></Lists>

      <!-- CTA Section -->
      <!-- <div v-if="section.type === 'cta'" class="mt-4 text-center">
        <div>
          <v-btn color="secondary elevatedButton" :to="section.cta_button.link">
            {{ section.cta_button.text }}
          </v-btn>
        </div>
      </div> -->

      <!-- Table Section -->
      <SectionTable v-if="section.table" :table="section.table"></SectionTable>

      <!-- Text Link-->
      <div v-if="section.link" class="mt-1 text-center">
        <v-btn color="secondary" :to="section.link.url" class="elevatedButton">
          {{ section.link.text }}
        </v-btn>
      </div>

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
import Shapedivider from "../components/common/shapeDivider.vue";
import { useRoute } from "vue-router";
import { marked } from "marked"; // Import markdown parser
import FooterCTA from "../components/FooterCTA.vue";
import { useTheme } from "vuetify";
import Paragraphs from "./sections/paragraphs.vue";
import Lists from "./sections/lists.vue";
import Faqs from "./sections/faqs.vue";
import SectionTable from "./sections/sectionTable.vue";

const theme = useTheme();
const route = useRoute();

const props = defineProps({
  resource: Object,
});

const { breadcrumbs } = useBreadcrumbs();
// SEO Meta Tags
useHead({
  title: props.resource.meta.title,
  meta: [
    { name: "description", content: props.resource.meta.description },
    { name: "keywords", content: props.resource.meta.keywords },
    { property: "og:title", content: props.resource.meta.title },
    {
      property: "og:description",
      content: props.resource.meta.description,
    },
    {
      property: "og:url",
      content: `https://getspelly.com/images/content/resources/${route.params.slug}`,
    },
  ],
});

const parseMarkdown = (text) => {
  return text ? marked.parse(text) : "";
};
</script>
