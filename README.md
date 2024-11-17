# Vue Use State

A wrapper for the Vue reactivity APIs you love, making them global and easily accessible across the app. It ensures that the APIs retain their natural behavior while being fully typed for a great user experience. 💚

[![npm version](https://img.shields.io/badge/NPM_Home_Page-brightgreen)](https://www.npmjs.com/package/vue-use-state)

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
const key5 = useState('5', reactive({ a: 1 })); // Ref<{ a: number }>
const key6 = useState('6', () => reactive({ a: 1 })); // Ref<{ a: number }>
const key7 = useState('7', readonly({ a: 1 })); // Ref<{ readonly a: number }>
const key8 = useState('8', () => readonly({ a: 1 })); // Ref<{ readonly a: number }>
const key9 = useState('9', shallowReactive({ a: 1 })); // Ref<ShallowReactive<{ a: number }>>
const key10 = useState('10', () => shallowReactive({ a: 1 })); // Ref<ShallowReactive<{ a: number }>>
const key11 = useState('11', shallowReadonly({ a: 1 })); // Ref<Readonly<{ a: number }>>
const key12 = useState('12', () => shallowReadonly({ a: 1 })); // Ref<Readonly<{ a: number }>>
const key13 = useState('13', ref(shallowRef({}))); // ShallowRef<{ a: Ref<number, number> }>
const key14 = useState(
  'I-dare-you-to-go-harder-than-this',
  shallowRef(
    ref(
      reactive(
        shallowReactive(
          shallowReadonly({
            a: shallowReadonly({
              b: ref(1),
              c: reactive({
                d: shallowReactive({
                  e: readonly(ref(2)),
                  f: shallowReadonly({
                      g: ref(3),
                      h: ref(4),
                    }),
                }),
                g: shallowReadonly({
                  h: ref(4),
                  i: shallowReactive({
                    j: readonly(ref(5)),
                    k: shallowReadonly(ref(6)),
                  }),
                }),
              }),
            }),
          }),
        ),
      ),
    ),
  ),
);

type Key14Type =  Ref<Reactive<ShallowReactive<Readonly<{
    a: Readonly<{
        b: Ref<number>;
        c: {
            d: ShallowReactive<{
                e: Readonly<Ref<number>>;
                f: Readonly<{
                    g: Ref<number>;
                    h: Ref<number>;
                }>;
            }>;
            g: {
                ...;
            };
        };
    }>;
}>>>, Reactive<...>>
```

> You can use any of Vue’s reactivity APIs as state, and they’ll remain fully reactive and properly typed, no matter how simple or complex the state structure is. Whether it’s a ref, a plain value, or a deeply nested object, everything works seamlessly. Think of it as a simple way to elevate your reactive variable to a global scope, without compromising on Vue’s core principles.

## APIs

| API           | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `useState`    | Creates a reactive state reference based on the given value and it will be persisted across the app.                           |
| `disposeState`| Disposes of the state associated with the given key.                        |
| `resetStates` | Resets all states by removing all key-value pairs.                          |
| `getStates`   | Retrieves a readonly version of all states.                                 |
| `getState`    | Retrieves a computed reference to the state associated with the given key.  |


## License

[MIT](./LICENSE)

Made with ❤️ by [Ragab](https://github.com/ahmedragab20).

**🇵🇸Alhamdulillah, Allah is the best of the planners!🇵🇸**
