import { setVh } from "../lib/setViewPort";
import { onMounted, ref } from "vue";
export const useSetVh = () => {
  const vhRef = ref(null);
  onMounted(() => {
    const vh = setVh();
    vhRef.value = vh;
    window.addEventListener("resize", setVh);
  });

  return { vhRef };
};
