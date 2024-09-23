<script setup>
  const props = defineProps({
    isDropdown: Boolean,
    selectedClick: Function,
    selectedKeyword: String,
    topItemClick: Function,
    bottomItemClick: Function,
  });
</script>
<template>
  <div class="dropdown-container body-12px">
    <div
      @click="props.selectedClick"
      class="selected-item"
      :class="props.isDropdown && 'dropdown-item-selected'"
    >
      <p>{{ props.selectedKeyword }}</p>
      <BottomArrowIcon class="icon-xs" />
    </div>
    <TransitionGroup name="fade">
      <div v-if="props.isDropdown" class="dropdown-list">
        <div
          @click="props.topItemClick"
          class="dropdown-item dropdown-item-top"
          :class="
            props.selectedKeyword === '가나다 순' && 'dropdown-item-selected'
          "
        >
          <p>가나다 순</p>
          <CheckRoundedIcon v-if="props.selectedKeyword === '가나다 순'" />
          <div v-else style="width: 16px; height: 16px" />
        </div>
        <div
          @click="props.bottomItemClick"
          class="dropdown-item dropdown-item-bottom"
          :class="
            props.selectedKeyword === '가까운 순' && 'dropdown-item-selected'
          "
        >
          <p>가까운 순</p>
          <CheckRoundedIcon v-if="props.selectedKeyword === '가까운 순'" />
          <div v-else style="width: 16px; height: 16px" />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
  .selected-item {
    width: 92px;
    display: flex;
    justify-content: center;
    gap: 6px;
    padding: 5.5px 0 6.5px 0;
    border-radius: 10px;
    z-index: 3;
  }
  .dropdown-container {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 3;
  }
  .dropdown-list {
    border: 1px solid var(--color-gray-20);
    border-radius: 10px;
  }
  .dropdown-item {
    display: flex;
    justify-content: center;
    gap: 6px;
    width: 90px;
    padding: 5.5px 0 6.5px 0;
    background-color: var(--color-white);
    border-radius: 10px;
  }
  .dropdown-item-selected {
    background-color: var(--color-gray-10);
    transition: 0.5s background-color;
  }
  .dropdown-item-top {
    border-radius: 10px 10px 0 0;
  }
  .dropdown-item-bottom {
    border-radius: 0 0 10px 10px;
  }
</style>
