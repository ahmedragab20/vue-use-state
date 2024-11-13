import { disposeState, useState } from './state';
import { computed, reactive } from 'vue';
export function useCounter() {
  const count = useState('count', reactive({ x: 0 }));
  const double = computed(() => count.value?.x * 2);
  const increment = () => {
    console.log(count);
    if (count.value === undefined) {
      count.value = { x: 0 };
    }
    count.value.x++;
  };
  return { count, increment, double };
}

export function disposeCounter(key: string) {
  disposeState(key);
}
