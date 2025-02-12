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
          <v-card
            width="300"
            rounded="lg"
            class="mx-auto"
            @click="navigateToResource(resource.slug)"
          >
            <v-img
              :src="`/images/content/${resource.image}`"
              height="150"
              cover
            ></v-img>
            <v-card-item>
              <div class="text-body-1 font-weight-bold mt-2">
                {{ resource.title }}
              </div>
              <div class="text-body-2 mt-2">{{ resource.description }}</div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script setup>
import Shapedivider from "../components/common/shapeDivider.vue";
import { useDisplay, useTheme } from "vuetify";
import { useRouter } from "vue-router";

const router = useRouter();
const theme = useTheme();

const { data: slugs } = await useAsyncData("resources", () =>
  $fetch("/api/resources")
);

// Fetch all resource data before rendering the page
const resources = await Promise.all(
  slugs.value.slugs.map(async (slug) => {
    const data = await import(`~/data/resources/${slug}.json`);
    return data.default;
  })
);

// Function to navigate to the selected resource page
const navigateToResource = (slug) => {
  router.push(`/resources/${slug}`);
};
</script>
