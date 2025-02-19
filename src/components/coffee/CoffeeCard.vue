<script setup>
const props = defineProps({
    image: { type: String },
    name: { type: String },
    price: { type: Number },
    order: { type: Boolean, default: false }
})

</script>

<template>
    <a href="#" class="block" :class="{ 'bg-red-200 p-2 rounded-lg': order }">
        <img alt="coffee" :src="image" class="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72" />

        <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong class="font-medium">{{ name }}</strong>

            <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

            <p class="mt-0.5 opacity-50 sm:mt-0">{{ price }}</p>


        </div>
    </a>
</template>