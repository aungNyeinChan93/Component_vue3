<script setup>
import CoffeeCard from '@/components/coffee/CoffeeCard.vue';
import { useCoffeeStore } from '@/stores/coffee';
import Pannel from '@/components/Pannel.vue';
import { onMounted } from 'vue';

const { coffees, getCoffee } = useCoffeeStore();

onMounted(() => getCoffee("http://localhost:4001/coffee"));

</script>

<template>
    <Pannel>
        <section>
            <h1 class="header underline !text-pink-500 !hover:text-pink-200 inline md:block">
                just really good coffee & matcha
                Stock up on your favorites
            </h1>
            <div v-if="Object.keys(coffees).length" class="wrapper mt-6  px-4">
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <template v-for="coffee in coffees" :key="coffee.id">
                        <CoffeeCard :image="coffee.image" :name="coffee.name" :price="coffee.price" />
                    </template>
                </div>
            </div>
            <div class="empty" v-else>
                <p class="header !text-red-600 p-4">Loading !!!</p>
            </div>
        </section>
    </Pannel>
</template>
