# Vue Use State

A wrapper for the Vue reactivity APIs you love, making them global and easily accessible across the app. It ensures that the APIs retain their natural behavior while being fully typed for a great user experience. 💚

[![npm version](https://img.shields.io/badge/NPM_Home_Page-brightgreen)](https://www.npmjs.com/package/vue-use-state)
[![Install size](https://packagephobia.com/badge?p=vue-use-state)](https://packagephobia.com/result?p=vue-use-state)

## Installation

#### Using Bun
```bash
bun add vue-use-state
```

#### Using NPM
```bash
npm install vue-use-state
```

#### Using Yarn
```bash
yarn add vue-use-state
```

#### Using PNPM
```bash
pnpm add vue-use-state
```

## Usage

```ts
import { useState } from 'vue-use-state';

const key1 = useState('1', 0); // Ref<number>
const key2 = useState('2', () => 0); // Ref<number>
const key3 = useState('3', () => ref(0)); // Ref<number>
const key4 = useState('4', () => ({ a: 1 })); // Ref<{ a: number }>
const key5 = useState('5', reactive({ a: 1 })); // Ref<Reactive<{ a: number }>>
const key6 = useState('6', () => reactive({ a: 1 })); // Ref<Reactive<{ a: number }>>
const key7 = useState('7', readonly({ a: 1 })); // Ref<Readonly<{ a: number }>>
const key8 = useState('8', () => readonly({ a: 1 })); // Ref<Readonly<{ a: number }>>
const key9 = useState('9', shallowReactive({ a: 1 })); // Ref<ShallowReactive<{ a: number }>>
const key10 = useState('10', () => shallowReactive({ a: 1 })); // Ref<ShallowReactive<{ a: number }>>
const key11 = useState('11', shallowReadonly({ a: 1 })); // Ref<ShallowReadonly<{ a: number }>>
const key12 = useState('12', () => shallowReadonly({ a: 1 })); // Ref<ShallowReadonly<{ a: number }>>
// you get the idea! 🤪
```

> **You can use any of the Vue reactivity APIs as a state, and they will be reactive and typed as expected regardless of how deep or shallow the object is. Whether it's a ref, plain value, or just anything, it will work seamlessly! Just treat it as a wrapper that only wraps a state without affecting any of its default behavior.**

## APIs

| API           | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `useState`    | Creates or retrieves a reactive state reference that will be persisted across the app.                           |
| `disposeState`| Disposes of the state associated with the given key.                        |
| `resetStates` | Resets all states by removing all key-value pairs.                          |
| `getStates`   | Retrieves a readonly version of all states.                                 |
| `getState`    | Retrieves a computed reference to the state associated with the given key.  |


## License

[MIT](./LICENSE)

Made with ❤️ by [Ragab](https://github.com/ahmedragab20).

**Alhamdulillah, Allah is the nest of the planners!**
