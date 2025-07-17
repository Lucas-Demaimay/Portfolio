import { ref } from 'vue';

const start = ref(15);
const mid = ref(-15);
const startBis = ref(-15);
const midBis = ref(15);

export function useAnimationStore() {
  return { start, mid, startBis, midBis };
}