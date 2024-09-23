<script setup>
  const props = defineProps(['label', 'onChange', 'placeholder', 'isCenter']);
</script>
<template>
  <div>
    <label v-if="label" :for="props.label">{{ props.label }}</label>
    <input type="text" @change="props.onChange" :placeholder="props.placeholder" :class="isCenter && 'center'" />
  </div>
</template>
<style scoped>
  .center {
    text-align: center;
  }
</style>
