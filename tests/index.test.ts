import { describe, it, expect, beforeEach } from 'vitest';
import {
  useState,
  disposeState,
  resetStates,
  getStates,
  getState,
} from '../src';
import {
  ref,
  reactive,
  readonly,
  shallowRef,
  shallowReactive,
  shallowReadonly,
} from 'vue';

describe('useState', () => {
  beforeEach(() => {
    resetStates();
  });

  it('should initialize state with a simple value', () => {
    const stateRef = useState('simple', 42);
    expect(stateRef.value).toBe(42);
  });

  it('should initialize state with a ref', () => {
    const initialRef = ref(100);
    const stateRef = useState('ref', initialRef);
    expect(stateRef.value).toBe(100);
  });

  it('should initialize state with a reactive object', () => {
    const initialReactive = reactive({ count: 0 });
    const stateRef = useState('reactive', initialReactive);
    expect(stateRef.value.count).toBe(0);
  });

  it('should initialize state with a readonly object', () => {
    const initialReadonly = readonly({ count: 0 });
    const stateRef = useState('readonly', initialReadonly);
    expect(stateRef.value.count).toBe(0);
  });

  it('should initialize state with a shallowRef', () => {
    const initialShallowRef = shallowRef({ count: 0 });
    const stateRef = useState('shallowRef', initialShallowRef);
    expect(stateRef.value.count).toBe(0);
  });

  it('should initialize state with a shallowReactive object', () => {
    const initialShallowReactive = shallowReactive({ count: 0 });
    const stateRef = useState('shallowReactive', initialShallowReactive);
    expect(stateRef.value.count).toBe(0);
  });

  it('should initialize state with a shallowReadonly object', () => {
    const initialShallowReadonly = shallowReadonly({ count: 0 });
    const stateRef = useState('shallowReadonly', initialShallowReadonly);
    expect(stateRef.value.count).toBe(0);
  });

  it('should dispose of a state', () => {
    useState('toDispose', 123);
    disposeState('toDispose');
    const state = getState('toDispose');
    expect(state.value).toBeNull();
  });

  it('should reset all states', () => {
    useState('state1', 1);
    useState('state2', 2);
    resetStates();
    const states = getStates();
    expect(Object.keys(states).length).toBe(0);
  });

  it('should retrieve a readonly version of all states', () => {
    useState('state1', 1);
    const states = getStates();
    expect(states?.$__state__state1).toBe(1);
  });

  it('should retrieve a state by key', () => {
    useState('stateKey', 999);
    const state = getState('stateKey');
    expect(state.value).toBe(999);
  });

  it('should return null for a non-existent state', () => {
    const state = getState('nonExistent');
    expect(state.value).toBeNull();
  });
});
