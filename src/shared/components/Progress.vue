<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';

  const props = defineProps(['textList', 'color']);
  const value = ref(0);
  const intervalId = ref(null);

  onMounted(() => {
    intervalId.value = setInterval(() => {
      value.value++;
      if (value.value > 100) clearInterval(intervalId.value);
    }, 10);
  });

  onUnmounted(() => {
    clearInterval(intervalId.value);
  });
</script>
<template>
  <div>
    <progress
      :class="color && color"
      :value="value"
      min="0"
      max="100"
    ></progress>
    <div class="text-container">
      <p v-for="(p, i) in props.textList" :key="i">{{ p }}</p>
    </div>
  </div>
</template>
<style scoped>
  progress {
    appearance: none;
    width: 130px;
  }
  progress::-webkit-progress-bar {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    height: 8px;
    overflow: hidden;
  }

  progress::-webkit-progress-value {
    background: white;
    border-radius: 0px;
    height: 28px;
    width: 48px;
  }
  .red::-webkit-progress-value {
    background-color: var(--color-gray-40);
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-size: var(--font-size-md);
    line-height: 20px;
  }
  p {
    opacity: 0.6;
  }
</style>
