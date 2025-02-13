<template>
  <div v-if="resource">
    <!-- Hero Section -->
    <section class="text-center bg-section3 pb-16">
      <v-img :src="resource.image" height="300" cover> </v-img>
      <h1 class="text-h1 mt-8">{{ resource.title }}</h1>
      <div
        class="sectionContainer"
        v-html="parseMarkdown(resource.description)"
      ></div>
      <Shapedivider
        :color="theme.current.value.colors.white"
        position="bottom"
        :flip="true"
      />
    </section>
    <!-- End Hero Section -->

    <Head>
      <Title>{{ resource.meta.title }}</Title>
      <Meta name="description" :content="resource.meta.description" />
      <Meta name="keywords" :content="resource.meta.keywords" />
    </Head>

    <!-- Render Sections Dynamically -->
    <section
      v-for="section in resource.content"
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
            <v-btn
              color="secondary elevatedButton"
              :to="section.cta_button.link"
            >
              {{ section.cta_button.text }}
            </v-btn>
          </div>
        </div>

        <!-- Table Section -->
        <v-table class="mt-4">
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
        <div v-if="section.link" class="mt-4 text-center">
          <v-btn variant="text" :to="section.link.url">
            {{ section.link.text }}
          </v-btn>
        </div>

        <!-- FAQ Section-->
        <v-expansion-panels v-if="section.type === 'faq'" class="mt-4 pb-4">
          <v-expansion-panel v-for="(faq, i) in section.items" :key="i">
            <v-expansion-panel-title
              v-html="parseMarkdown(faq.question)"
            ></v-expansion-panel-title>
            <v-expansion-panel-text
              v-html="parseMarkdown(faq.answer)"
            ></v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </section>

    <section v-if="resource.spellyPlug">
      <FooterCTA
        :title="resource.spellyPlug.heading"
        :subTitle="resource.spellyPlug.text"
        :buttonText="resource.spellyPlug.cta_button.text"
        :topShapeDividerColor="theme.current.value.colors.white"
      />
    </section>
  </div>
</template>

<script setup>
import Shapedivider from "../components/common/shapeDivider.vue";
import { useRoute, useRouter } from "vue-router";
import { useTheme } from "vuetify";
import { marked } from "marked"; // Import markdown parser
import FooterCTA from "../components/FooterCTA.vue";

const route = useRoute();
const router = useRouter();
const theme = useTheme();

// Extract slug parts from URL
const slugParts = Array.isArray(route.params.slug)
  ? route.params.slug
  : [route.params.slug];

let pageData = null;
let subpages = [];

// Determine file path based on slug parts
let filePath;
if (slugParts.length === 1) {
  // If only one part (e.g., "/resources/free-spelling-worksheets"), load "index.json"
  filePath = `~/data/resources/${slugParts[0]}/index.json`;
} else {
  // If more than one part (e.g., "/resources/free-spelling-worksheets/printable-pdf")
  filePath = `~/data/resources/${slugParts[0]}/${slugParts
    .slice(1)
    .join("-")}.json`;
}

const { data: resource } = await useAsyncData(() =>
  import(filePath).then((m) => m.default)
);

// SEO Meta Tags
useHead({
  title: resource.value.meta.title,
  meta: [
    { name: "description", content: resource.value.meta.description },
    { name: "keywords", content: resource.value.meta.keywords },
    { property: "og:title", content: resource.value.meta.title },
    { property: "og:description", content: resource.value.meta.description },
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
