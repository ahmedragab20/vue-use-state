<script setup lang="ts">
import { useCounter } from '../composables/counter';

const { count, increment } = useCounter();
</script>
<template>
    <div class="counter-container">
        <h3>Two</h3>
        <p>{{ count?.x }}</p>
        <button @click="increment">Increment</button>
        <div class="dispose-input-container">
            <input v-if="typeof count?.x === 'number'" class="dispose-input" type="number" v-model="count.x" />
            <p v-else>count?.x is undefined</p>
        </div>
    </div>

</template>

<style>
.dispose-input-container {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #304f8c;
    border-radius: 10px;
}

.dispose-input {
    padding: 10px;
    border: 1px solid #304f8c;
    border-radius: 10px;
}
</style>