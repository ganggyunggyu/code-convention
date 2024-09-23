<script setup>
  const props = defineProps({
    label: String,
    type: String,
    icon: [Object, Function],
    iconSize: String,
  });
</script>
<template>
  <button :class="type && type" type="button">
    <component :class="props.iconSize" v-if="props.icon" :is="props.icon" />
    <p v-if="props.label" class="button-label">
      {{ props.label }}
    </p>
  </button>
</template>
<style scoped>
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .button-label {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  /** button 색상과 사이즈를 조합하여 사용 */
  .xs {
    width: 80px;
    height: 32px;
    font-size: 12px;
    border-radius: 24px;
    padding: 10.5px 0 10.5px 0;
  }
  .sm {
    width: 120px;
    height: 46px;
    border-radius: 24px;
    padding: 12px 34.5px 14px 34.5px;
    font-size: 14px;
    font-weight: 700;
  }

  .md {
    min-width: 120px;
    min-height: 46px;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 34.5px 14px 34.5px;
    border-radius: 24px;
  }

  .lg {
    font-size: 14px;
    font-weight: 700;
    padding: 12px 0 14px 0;
    width: 90%;
    border-radius: 24px;
  }

  .black {
    background-color: var(--color-black);
    color: var(--color-white);
  }

  .gray-xs {
    background-color: var(--color-gray-30);
    color: var(--color-black);
    padding: 8px 14.5px 10px 14.5px;
    font-size: 14px;
    font-weight: 700;
  }
  .gray-10 {
    background-color: var(--color-gray-10);
    border: 1px solid var(--color-gray-30);
    color: var(--color-gray-50);
  }

  .gray-20 {
    background-color: var(--color-gray-20);
    color: var(--color-gray-50);
    border: 1px solide var(--color-gray-30);
    border-radius: 24px;
  }

  .gray-30 {
    background-color: var(--color-gray-30);
    border: 1px solid var(--color-gray-50);
    color: var(--color-black);
  }
  .disable {
    background-color: var(--color-gray-20);
    color: var(--color-white);
  }

  /** chip */

  .chip-sm {
    min-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 16px;
    padding: 7.5px 12px 8.5px 12px;
    transition: all 0.5s;
    box-shadow: 0px 4px 10px rgba(188, 188, 121, 0.3);
  }
  .chip-md {
    display: flex;
    gap: 5px;
    border-radius: 24px;
    padding: 10.5px 24px 11.5px 24px;
    font-size: 12px;
    font-weight: 500;
    min-width: fit-content;
    transition: all 0.5s;
  }
  .chip-lg {
    border-radius: 24px;
    padding: 12.5px 24px 13.5px 24px;
    font-size: 12px;
    font-weight: 500;
    min-width: fit-content;
    transition: all 0.5s;
  }
  .chip-gray {
    background-color: var(--color-gray-50);
    border: 1px solid var(--color-gray-40);
    color: var(--color-white);
  }

  .chip-white {
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-10);
  }
  .chip-light-gray {
    background-color: var(--color-gray-10);
    color: var(--color-black);
    border: 1px solid var(--color-gray-20);
  }
</style>
