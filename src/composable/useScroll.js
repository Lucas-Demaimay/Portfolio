import { ref, onMounted, onBeforeUnmount } from "vue";

export function useScroll() {
  const scroll = ref(null);
  const indicator = ref(null);

  function onScroll() {
    if (scroll.value && indicator.value) {
      const box = scroll.value;
      const bar = indicator.value;
      const scrollTop = box.scrollTop;
      const scrollHeight = box.scrollHeight - box.clientHeight;
      const percent = scrollTop / scrollHeight;
      const maxOffset = box.scrollHeight - bar.offsetHeight;

      const offsetY = percent * maxOffset;
      bar.style.transform = `translateY(${offsetY}px)`;
    }
  }

  onMounted(() => {
    scroll.value.addEventListener("scroll", onScroll);
    onScroll();
  });
  onBeforeUnmount(() => {
    if (scroll.value) {
      scroll.value.removeEventListener("scroll", onScroll);
    }
  });

  return { scroll, indicator };
}
