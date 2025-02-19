<script setup>
import CoffeeCard from './CoffeeCard.vue';

const props = defineProps({
    coffees: { type: Array }
})


</script>

<template>
    <div v-if="Object.keys(coffees).length" class="wrapper mt-6  px-4">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <template v-for="coffee in coffees" :key="coffee.id">
                <CoffeeCard :image="coffee?.image" :name="coffee?.name" :price="coffee?.price"
                    @click="$emit('coffeeName', coffee?.name)" />
            </template>
        </div>
    </div>
    <div class="empty" v-else>
        <p class="header !text-red-600 p-4">Loading !!!</p>
    </div>
</template>