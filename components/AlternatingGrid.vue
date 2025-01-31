<template>
  <v-row
    :class="mobile ? '' : 'mx-16'"
    align="center"
    v-for="(benefit, i) in props.items"
    :key="i"
  >
    <template v-if="i % 2 === 0">
      <!-- Odd rows -->
      <v-col cols="12" sm="6" :order="mobile ? 'first' : ''">
        <div class="d-flex justify-end">
          <v-img :src="benefit.image"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div :class="mobile ? '' : 'ml-12'">
          <v-card elevation="0">
            <v-card-item>
              <v-chip
                variant="outlined"
                color="secondary"
                :prepend-icon="benefit.icon"
                class="px-4"
              >
                <span class="text-default text-caption">{{
                  benefit.chipText
                }}</span>
              </v-chip>
            </v-card-item>
            <v-card-item>
              <h4 class="text-h4">{{ benefit.title }}</h4>
            </v-card-item>
            <v-card-text>
              {{ benefit.text }}
            </v-card-text>
            <v-card-text>
              <v-btn class="elevatedButton" color="primary"
                >Start Learning</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </template>

    <template v-else>
      <!-- Even Rows -->
      <v-col cols="12" sm="6">
        <div :class="mobile ? '' : 'ml-12'">
          <v-card elevation="0">
            <v-card-item>
              <v-chip
                variant="outlined"
                color="secondary"
                :prepend-icon="benefit.icon"
                class="px-4"
              >
                <span class="text-default text-caption">{{
                  benefit.chipText
                }}</span>
              </v-chip>
            </v-card-item>
            <v-card-item>
              <h4 class="text-h4">{{ benefit.title }}</h4>
            </v-card-item>
            <v-card-text>
              {{ benefit.text }}
            </v-card-text>
            <v-card-text>
              <v-btn class="elevatedButton" color="primary"
                >Start Learning</v-btn
              >
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" sm="6" :order="mobile ? 'first' : ''">
        <div class="d-flex justify-end">
          <v-img :src="benefit.image"></v-img>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { mobile, md, lg, lgAndUp } = useDisplay();

const props = defineProps({
  items: Array,
});
</script>
