<script setup>
defineProps({
    contact: Object
})
</script>

<template>
    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
        <div class="flex flex-col gap-6">
            <p class="text-sm text-gray-500">{{ contact.name }}</p>

            <p class="text-lg font-medium text-gray-900">{{ contact.message }}</p>
        </div>

        <div class="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600">

            <a href="#" class="text-xs font-medium"> {{ contact.phone }}</a>
        </div>
    </article>
</template>