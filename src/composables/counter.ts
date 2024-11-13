import { disposeState, getState, useState, getStates } from './state';
import {
  computed,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowRef,
  toRef,
} from 'vue';
export function useCounter() {
  const count = useState('count', ref(ref(ref(0))));

  const user = useState(
    'user',
    readonly({
      name: 'John',
      age: 30,
    }),
  );

  const readonlyToRef = toRef(
    readonly({
      name: 'John',
    }),
  );

  // readonlyToRef.value.name = 'Ahmed';

  // user.value.name = 'Ahmed';

  console.log({
    user: user,
  });

  const nestedList = useState(
    'nestedList',
    readonly(
      shallowRef([
        {
          id: ref(1),
          name: reactive({
            first: ref('John'),
            last: ref('Doe'),
          }),
          details: shallowReactive({
            age: ref(30),
            address: readonly({
              street: ref('123 Main St'),
              city: ref('Anytown'),
              country: ref('USA'),
            }),
          }),
        },
        {
          id: ref(2),
          name: reactive({
            first: ref('Jane'),
            last: ref('Smith'),
          }),
          details: shallowReactive({
            age: ref(25),
            address: readonly({
              street: ref('456 Elm St'),
              city: ref('Othertown'),
              country: ref('Canada'),
            }),
          }),
        },
      ]),
    ),
  );

  console.log({
    // count: count.value,
    // nestedList: nestedList.value,
    states: getStates(),
    // useCount: getState('count'),
  });

  const double = computed(() => count.value * 2);
  const increment = () => {
    if (count.value === undefined) {
      count.value = 0;
    }
    console.log('🚀 Incrementing: ', getState<number>('count').value);

    count.value++;
    console.log('🔔 Incremented: ', getState<number>('count').value);
    console.log({
      count: count.value,
    });
  };
  return { count, increment, double };
}

export function disposeCounter(key: string) {
  disposeState(key);
}
