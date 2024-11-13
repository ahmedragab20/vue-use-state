<script setup lang="ts">
import { useCounter } from '../composables/counter';

const { count, increment } = useCounter();
</script>
<template>
    <div class="counter-container">
        <h3>SoNested</h3>
        <p>{{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>
