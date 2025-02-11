<template>
  <section class="hero text-center pb-16">
    <h1 class="text-h1">📚 Explore Our Spelling Guides</h1>
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
      <v-col v-for="(guide, i) in guides" :key="i">
        <NuxtLink :to="`/guides/${guide.slug}`" class="footerLink">
          <v-card width="300" rounded="lg" class="mx-auto">
            <v-img
              :src="`/images/content/${guide.image}`"
              height="150"
              cover
            ></v-img>
            <v-card-item>
              <div class="text-body-1 font-weight-bold mt-2">
                {{ guide.title }}
              </div>
              <div class="text-body-2 mt-2">
                {{ guide.description }}
              </div>
            </v-card-item>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import guides from "@/data/guides.json";
import Shapedivider from "../components/common/shapeDivider.vue";
import { useDisplay, useTheme } from "vuetify";

const theme = useTheme();

const getImage = (img) => {
  const imgPath = "../assets/images/content/" + img;
  console.log("imgPath", imgPath);
  console.log("import.meta.url", import.meta.url);

  const imageURL = new URL(`${imgPath}`, import.meta.url).href;
  return imageURL;
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #ffcc33, #ff6699);
  padding: 40px;
  color: white;
}
</style>
