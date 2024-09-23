<script setup>
  import { useSetVh } from './shared/hooks/useSetVh';
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>
