<script setup>
import vLazyImage from "v-lazy-image";

const props = defineProps(["src", "placeholder", "alt"]);
</script>
<template>
  <v-lazy-image :src="props.src" :src-placeholder="props.placeholder" :alt="props.alt" />
</template>
<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
