import { reactive, type Ref, toRef, unref } from 'vue';
import { uuid } from '../utils';
const prefix = '$__state__';
const state = reactive<Record<string, unknown>>({});
export function useState<T>(key: string, init: () => T | Ref<T>): Ref<T>;
export function useState<T>(key: string, value: T): Ref<T>;
export function useState<T>(value: T): Ref<T>;
export function useState<T>(...args: unknown[]): Ref<T> {
  if (args.length === 1 && typeof args[0] === 'string') {
    return toRef(state, args[0]) as Ref<T>;
  }

  const _key =
    typeof args[0] === 'string' ? `${prefix}${args[0]}` : `${prefix}${uuid()}`;

  if (!(_key in state)) {
    if (args.length === 1) {
      state[_key] = unref(args[0]);
    } else {
      state[_key] = unref(
        typeof args[1] === 'function'
          ? (args[1] as () => T | Ref<T>)()
          : args[1],
      );
    }
  }
  return toRef(state, _key) as Ref<T>;
}

export function disposeState(key: string) {
  const _key = `${prefix}${key}`;
  console.log({
    _key,
    state,
  });

  if (!(_key in state)) {
    console.warn(`State with key ${key} not found`);
    return;
  }
  delete state[_key];
}
