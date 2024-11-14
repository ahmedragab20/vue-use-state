import {
  reactive,
  toRef,
  isRef,
  isReactive,
  shallowRef,
  ref,
  shallowReactive,
  readonly,
  isReadonly,
  isShallow,
  shallowReadonly,
  computed,
  type Ref,
  type ComputedRef,
} from '@vue/reactivity';
import { uuid } from './utils';

/**
 * A prefix used for state keys.
 * @type {string}
 */
const prefix: string = '$__state__';

/**
 * A reactive state object to store key-value pairs.
 * @type {Record<string, unknown>}
 */
const state: Record<string, unknown> = reactive<Record<string, unknown>>({});

/**
 * A wrapper for the Vue reactivity APIs you love, making them global and easily accessible across the app.
 * It ensures that the APIs retain their natural behavior while being fully typed for a great user experience.
 *
 * @template T
 * @param {string} key - The key for the state.
 * @param {(() => T | Ref<T>) | (T | Ref<T>)} init - Initial value or function returning the value.
 * @returns {Ref<T>} A reference to the state value.
 */
export function useState<T>(key: string, init: () => T | Ref<T>): Ref<T>;
export function useState<T>(key: string, value: T | Ref<T>): Ref<T>;
export function useState<T>(value: T | Ref<T>): Ref<T>;
export function useState<T>(...args: unknown[]): Ref<T> {
  const _key =
    typeof args[0] === 'string' ? `${prefix}${args[0]}` : `${prefix}${uuid()}`;

  if (_key in state) {
    return toRef(state, _key) as Ref<T>;
  }

  let value = args.length === 1 ? args[0] : args[1];

  if (typeof value === 'function') {
    value = (value as () => T | Ref<T>)();
  }

  if (
    !isShallow(value) &&
    (isRef(value) || isReactive(value) || isReadonly(value))
  ) {
    state[_key] = value;
  } else if (isShallow(value)) {
    state[_key] = isRef(value)
      ? shallowRef(value)
      : isReadonly(value)
        ? shallowReadonly(value as Record<string, unknown>)
        : shallowReactive(value as Record<string, unknown>);
  } else {
    state[_key] = ref(value);
  }

  return toRef(state, _key) as Ref<T>;
}

/**
 * Disposes of the state associated with the given key.
 *
 * @param {string} key - The key of the state to dispose.
 */
export function disposeState(key: string) {
  const _key = `${prefix}${key}`;
  if (!(_key in state)) {
    console.warn(`State with key ${key} not found`);
    return;
  }
  delete state[_key];
}

/**
 * Resets all states by removing all key-value pairs.
 */
export function resetStates() {
  for (const key of Object.keys(state)) {
    delete state[key];
  }
}

/**
 * Retrieves a readonly version of all states.
 *
 * @returns {Readonly<typeof state>} The readonly state object.
 */
export function getStates(): Readonly<typeof state> {
  return readonly(state);
}

/**
 * Retrieves a reference to the state associated with the given key.
 *
 * @param {string} key - The key of the state to retrieve.
 * @returns {ComputedRef<T | null>} A computed reference to the state value.
 */
export function getState<T>(key: string): ComputedRef<T | null> {
  if (!state?.[`${prefix}${key}`]) {
    return computed(() => null) as ComputedRef<null>;
  }

  return computed(() => state?.[`${prefix}${key}`]) as ComputedRef<T>;
}
