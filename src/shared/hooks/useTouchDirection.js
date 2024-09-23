import { ref } from 'vue';

const useTouchDirection = () => {
  const startY = ref(0);
  const endY = ref(0);
  const direction = ref('Mid');

  const handleTouchStart = (event) => {
    event.stopPropagation();
    startY.value = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    event.stopPropagation();
    endY.value = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    event.stopPropagation();
    const diffY = endY.value - startY.value;
    if (diffY > 0) {
      direction.value = direction.value === 'Up' ? 'Mid' : 'Down';
    } else {
      direction.value = direction.value === 'Down' ? 'Mid' : 'Up';
    }
  };

  return {
    direction,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useTouchDirection;
