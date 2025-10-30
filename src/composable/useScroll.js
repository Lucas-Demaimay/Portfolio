import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

export function useScroll() {
  const scroll = ref(null);
  const indicator = ref(null);

  function onScroll() {
    if (scroll.value && indicator.value) {
      const box = scroll.value;
      const bar = indicator.value;
      const scrollTop = box.scrollTop;
      const scrollHeight = box.scrollHeight - box.clientHeight;

      const barHeight = box.clientHeight / box.scrollHeight;
      bar.style.height = `${barHeight*100}%`;

      const percent = scrollTop / scrollHeight;
      const maxOffset = box.scrollHeight - bar.offsetHeight;

      const offsetY = percent * maxOffset;
      bar.style.transform = `translateY(${offsetY}px)`;
    }
  }

  onMounted(() => {
    nextTick(() => {
      if (scroll.value) {
        scroll.value.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onScroll);
        onScroll();
      }
    });
  });

  onBeforeUnmount(() => {
    if (scroll.value) {
      scroll.value.removeEventListener("scroll", onScroll);
    }
    window.removeEventListener("resize", onScroll);
  });

  return { scroll, indicator };
}
