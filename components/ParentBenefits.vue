<template>
  <v-slide-group show-arrows class="mt-10" center-active>
    <v-slide-group-item v-for="(slide, i) in parentBenefits" :key="i">
      <v-card
        width="250"
        rounded="lg"
        bg-color="white"
        elevation="0"
        class="py-4 mx-4 elevatedCard"
      >
        <v-card-item class="pb-0">
          <v-icon :icon="slide.icon" color="primary" size="large"></v-icon>
        </v-card-item>
        <v-card-item class="text-default text-h6">
          {{ slide.title }}
        </v-card-item>
        <v-card-text class="text-default">
          {{ slide.text }}
        </v-card-text>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
const parentBenefits = [
  {
    icon: "mdi-shield-lock-outline",
    title: "Kid Safe, Parent approved",
    text: "Your child’s safety is our #1 priority. Spelly is a completely ad-free, secure, and kid-friendly learning space with no distractions.",
  },
  {
    icon: "mdi-brain",
    title: "Builds Spelling Confidence",
    text: "By practicing in a stress-free environment, kids become more comfortable with words, boosting both their spelling and reading confidence.",
  },
  {
    icon: "mdi-medal-outline",
    title: "Prepares kids for spelling challenges",
    text: "Our word lists include words commonly found in popular national spelling competitions, helping kids build the skills they need to succeed in spelling challenges.",
  },
  {
    icon: "mdi-chair-school",
    title: "Grade-Appropriate Word Lists",
    text: "Words are carefully selected based on age and grade level, ensuring that kids are challenged appropriately as they advance.",
  },
  {
    icon: "mdi-wifi",
    title: "100% Online. No app downloads",
    text: "No app install required! Access Spelly instantly on any device, anytime, anywhere via your browser.",
  },
  {
    icon: "mdi-book-open-variant-outline",
    title: "Learn spelling the right way",
    text: "Spelly uses words directly from world renowned dictionaries, ensuring kids learn spelling that aligns with educational standards.",
  },
  {
    icon: "mdi-school-outline",
    title: "Encourages Independent Learning",
    text: "Spelly is easy to use, allowing kids to practice on their own without needing constant supervision.",
  },
];
</script>
