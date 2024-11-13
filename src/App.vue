<script setup lang="ts">
import One from './components/One.vue';
import Two from './components/Two.vue';

import { useCounter } from './composables/counter';
import { useState } from './composables/state';

const { count } = useCounter();

const map = useState(new Map());
console.log(map.value);
map.value.set('a', 1);
console.log(map);

// @ts-ignore
const mapKey = map._key;

console.log(mapKey, useState(mapKey).value);

</script>

<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <p>App.vue: {{ count?.x }}</p>
    <div class="counters-container">
      <One />
      <Two />
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}

.content .counters-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.content .counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content .counter-container p {
  font-size: 2rem;
  font-weight: 700;
}

.content .counter-container button {
  background-color: #d000ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
}
</style>
