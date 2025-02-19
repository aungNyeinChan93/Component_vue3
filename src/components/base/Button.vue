<script setup>
import { ref } from 'vue';
const hover = ref(false);
</script>

<template>
    <button @mouseover="hover = true" @mouseout="hover = false" class="px-4 py-2 rounded bg-pink-300 hover:bg-pink-400">
        <slot name="icon" :hover="hover" />
        <slot name="icon" :hover="hover" />
        <slot name="icon" :hover="hover" />
        <slot name="icon" :hover="hover" />
        <slot :hover="hover" />
    </button>
</template>