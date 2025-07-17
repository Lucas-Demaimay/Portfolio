import { onMounted, onUnmounted} from "vue";

export function useSmoothTransition(source, target, speed = 0.01) {
  let frameId;

  function animate() {
    const difference = target.value - source.value;
    if(Math.abs(difference) < 0.01) {
        source.value = target.value;
        return;
    }
    source.value += difference * speed;
    frameId = requestAnimationFrame(animate);
  }

  onMounted(() => {
    frameId = requestAnimationFrame(animate);
  })

  onUnmounted(() => {
    cancelAnimationFrame(frameId);
  })

  return () => cancelAnimationFrame(frameId);
}
