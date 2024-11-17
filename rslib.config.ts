import { defineConfig } from '@rslib/core';
import unimportPlugin from 'unplugin-auto-import/rspack';

export default defineConfig({
  tools: {
    rspack: {
      entry: './src/index.ts',
      plugins: [
        unimportPlugin({
          dts: './auto-imports.d.ts',
          imports: [
            {
              '@vue/reactivity': [
                'reactive',
                'ref',
                'shallowReactive',
                'shallowReadonly',
                'shallowRef',
                'toRef',
                'toRefs',
                'computed',
                'readonly',
                'isRef',
                'isReactive',
                'isReadonly',
                'isShallow',
              ],
            },
            {
              from: '@vue/reactivity',
              imports: ['Ref', 'ComputedRef'],
              type: true,
            },
            {
              './src/index.ts': [
                'useState',
                'getState',
                'getStates',
                'resetStates',
                'disposeState',
              ],
            },
          ],
        }),
      ],
    },
  },
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      dts: true,
    },
  ],
});
