<template>
  <!-- Hero Section -->
  <section class="text-center bg-section3 pb-16">
    <v-img :src="props.resource.image" height="300" cover> </v-img>
    <v-breadcrumbs :items="breadcrumbs" class="px-0 mb-8 ml-4"></v-breadcrumbs>
    <h1 class="sectionContainer text-h1 mt-8">{{ props.resource.title }}</h1>
    <div
      class="sectionContainer"
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
    class="pt-16 bg-white"
  >
    <!-- Content Section -->
    <div class="sectionContainer">
      <h2 class="text-h3">
        {{ section.heading }}
      </h2>

      <div
        class="mt-4"
        v-if="section.text"
        v-html="parseMarkdown(section.text)"
      ></div>

      <!-- List Items -->
      <v-list v-if="section.type === 'list'">
        <v-list-item v-for="(item, i) in section.items" :key="i">
          <v-list-item-title v-html="parseMarkdown(item)"></v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- CTA Section -->
      <div v-if="section.type === 'cta'" class="mt-4 text-center">
        <div>
          <v-btn color="secondary elevatedButton" :to="section.cta_button.link">
            {{ section.cta_button.text }}
          </v-btn>
        </div>
      </div>

      <!-- Table Section -->
      <v-table class="mt-4" v-if="section.type === 'table'">
        <thead class="bg-section3">
          <tr>
            <th v-for="col in section.columns" :key="col">
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in section.rows" :key="i">
            <td
              v-for="(cell, j) in row"
              :key="j"
              v-html="parseMarkdown(cell)"
            ></td>
          </tr>
        </tbody>
      </v-table>

      <!-- Text Link-->
      <div v-if="section.link" class="mt-1 text-center">
        <v-btn color="secondary" :to="section.link.url" class="elevatedButton">
          {{ section.link.text }}
        </v-btn>
      </div>

      <!-- FAQ Section-->

      <v-expansion-panels v-if="section.type === 'faq'" class="mt-4 pb-4">
        <v-expansion-panel
          v-for="(faq, i) in section.items"
          :key="i"
          :title="faq.question"
          :text="faq.answer"
        >
        </v-expansion-panel>
      </v-expansion-panels>
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
