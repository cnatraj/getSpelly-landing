<template>
  <div :class="additionalCSS" class="custom-shape-divider-wave">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  color: String,
  position: String,
  invert: Boolean,
  flip: Boolean,
});

const additionalCSS = ref([]);
if (props.position == "bottom") {
  additionalCSS.value.push("bottom");
} else {
  additionalCSS.value.push("top");
}

if (props.invert) {
  additionalCSS.value.push("invert");
}

if (props.flip) {
  additionalCSS.value.push("flip");
}
</script>

<style scoped>
.custom-shape-divider-wave {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
.invert.custom-shape-divider-wave {
  transform: rotate(0deg);
}
.top.custom-shape-divider-wave {
  top: 0;
}

.bottom.custom-shape-divider-wave {
  bottom: 0;
}
.custom-shape-divider-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.flip.custom-shape-divider-wave svg {
  transform: rotateY(180deg);
}
.custom-shape-divider-wave .shape-fill {
  /* fill: #ffffff; */
  fill: v-bind(props.color);
}
</style>
