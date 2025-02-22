<script setup>
defineProps({
    totalMember: { type: Number, required: true }
});
</script>
<template>
    <div class="px-1 flex justify-between items-center">
        <p class="px-4 py-2 rounded bg-pink-500 text-white text-xl inline hover:bg-pink-400">
            Total Member
            {{ totalMember }}
        </p>
        <p class="text-center text-gray-500 text-sm">
            &copy; 2025 Team Members. All rights reserved.
        </p>
    </div>

</template>