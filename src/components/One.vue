<script setup lang="ts">
import { useCounter, disposeCounter } from '../composables/counter';
import SoNested from './SoNested.vue';
const { count, increment, double } = useCounter();
</script>
<template>
    <div class="counter-container">
        <h3>Componnet One</h3>
        <p>{{ count?.x }}</p>
        <p>double: {{ double }}</p>
        <button @click="increment">Increment</button>
        <br>
        <div class="dispose-container">
            <button class="dispose-button" @click="disposeCounter('count')">Dispose</button>
        </div>
    </div>

    <div class="so-nested-container">
        <h1>So Nested</h1>
        <SoNested />
    </div>
</template>

<style>
.so-nested-container {
    padding: 10px 20px;
    border: 1px solid #308c6f;
    border-radius: 10px;
}

.dispose-container {
    padding: 10px;
    border: 1px solid #c82424;
    border-radius: 10px;
    margin-top: 10px;
}

.dispose-button {
    background: #c82424 !important;
    color: #fff;
}
</style>
