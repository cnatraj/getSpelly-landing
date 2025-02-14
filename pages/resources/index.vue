<template>
  <div>
    <section class="hero text-center pb-16">
      <h1 class="text-h1">📚 Free Spelling Resources</h1>
      <p class="text-h5">
        Fun, interactive, and structured spelling resources for learners of all
        levels.
      </p>
      <Shapedivider
        position="bottom"
        :color="theme.current.value.colors.white"
        :flip="true"
      />
    </section>

    <section class="bg-white pt-16">
      <v-row>
        <v-col v-for="resource in resources" :key="resource.slug">
          <PillarPageCards
            :link="`/resources/${resource.slug}`"
            :image="`${resource.image}`"
            :title="resource.title"
            :description="resource.description"
          ></PillarPageCards>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script setup>
import Shapedivider from "../components/common/shapeDivider.vue";

import { useDisplay, useTheme } from "vuetify";
import { useRouter } from "vue-router";
import { marked } from "marked"; // Import markdown parser
import { usePillarPages } from "../../composables/usePillarPages";
import PillarPageCards from "../../components/content/pillarPageCards.vue";

const router = useRouter();
const theme = useTheme();

const { data: resources } = usePillarPages("resources");

// Function to navigate to the selected resource page
const navigateToResource = (slug) => {
  router.push(`/resources/${slug}`);
};

const parseMarkdown = (text) => {
  return text ? marked.parse(text) : "";
};
</script>
