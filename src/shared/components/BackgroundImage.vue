<script setup>
  import { BACKGROUND } from '@/assets/constants/image';
  import Image from './Image.vue';
</script>
<template>
  <Image class="background-image" :src="BACKGROUND" alt="배경 이미지" />
</template>
<style scoped></style>
