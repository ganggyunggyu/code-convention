<script setup>
  import Button from './Button.vue';

  /**
   * Props:
   * - modalTextList: String[] (필수)
   * - buttonConfigList: {style: String, label: String, click: Function}[] (필수)
   * - backgroundClick: Function (필수)
   * - customClass: String (옵션)
   */

  const props = defineProps({
    modalTextList: {
      type: Array,
      required: true,
    },
    buttonConfigList: {
      type: Array,
      required: true,
    },
    backgroundClick: {
      type: Function,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  });
  const isMiniDevidce = document.body.clientWidth <= 360;
</script>

<template>
  <main class="modal-wrapper">
    <div
      @click="props.backgroundClick"
      :class="['modal-background', props.customClass]"
    />
    <article
      class="modal-container"
      :class="isMiniDevidce && 'mini-device-modal'"
    >
      <!-- <div class="modal-model" /> -->
      <div class="modal-text-container">
        <p
          v-for="(text, index) in props.modalTextList"
          :key="index"
          class="body-14px"
        >
          {{ text }}
        </p>
      </div>
      <div class="modal-button-container">
        <Button
          v-for="(button, index) in props.buttonConfigList"
          :key="index"
          :class="['modal-button', button.style]"
          :label="button.label"
          @click="button.click"
        />
      </div>
    </article>
  </main>
</template>

<style scoped>
  .modal-wrapper {
    position: fixed;
    width: 100%;
    height: calc(100 * var(--vh));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 998;
  }
  .modal-background {
    position: fixed;
    width: 100%;
    height: calc(100 * var(--vh));
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
  .modal-container {
    position: relative;
    width: 344px;
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0 0 0;
    background-color: var(--color-white);
    color: var(--color-gray-50);
    border-radius: 24px;
    z-index: 999;
  }
  .mini-device-modal {
    margin: 0 16px 0 16px;
  }
  .modal-model {
    position: absolute;
    top: -88px;
    width: 100px;
    height: 104px;
    background-color: red;
  }
  .modal-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    margin: 28px 0 6px 0;
  }
  .modal-button {
    padding: 0;
  }
  .modal-button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 16px 28px 20px;
  }
</style>
