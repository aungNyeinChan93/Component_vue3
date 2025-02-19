<script setup>
import { useCoffeeStore } from '@/stores/coffee';
import { useCategoryStore } from '@/stores/category';
import { computed, onMounted, ref } from 'vue';
import Pannel from '@/components/Pannel.vue';
import CoffeeLists from '@/components/coffee/CoffeeLists.vue';
import Badge from '@/components/coffee/Badge.vue';

const { coffees, getCoffee } = useCoffeeStore();
const { categories, getCategory } = useCategoryStore();

onMounted(() => {
    getCoffee("http://localhost:4001/coffee");
    getCategory("http://localhost:4001/category")
});

const byPrice = computed(() => coffees.filter(coffee => coffee.price <= 4000));

const orders = ref([]);
const handelCoffeeName = (name) => {
    if (confirm('are you sure to order this one?')) {
        orders.value.push(name);
    }
}
const orderItems = computed(() => {
    return orders.value.map((order) => coffees.filter(coffee => coffee.name === order)).flat();
})

const selectCategoryName = ref();
const handelSelected = (name) => {
    selectCategoryName.value = name
}

</script>

<template>
    <Pannel>
        <section>
            <div class="categories flex justify-start space-x-4">
                <template v-for="category in categories" :key="category.id">
                    <Badge :category="category.name" @selected="handelSelected"
                        :status="category.name === selectCategoryName" />
                </template>
            </div>
            <div class="my-4 bg-violet-200 rounded p-2">
                <h1 class="header font-mono underline !text-pink-500 !hover:text-pink-200 inline md:block">
                    just really good coffee & matcha
                    Stock up on your favorites
                </h1>
                <Pannel class="border">
                    <p class="text-center font-mono text-red-400 text-lg ">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Rerum
                        corrupti sed esse
                        s. Tenetur, atque debitis qui
                        recusandae maiores. Tenetur odio rerum!</p>
                </Pannel>
                <CoffeeLists :coffees="coffees" @coffeeName="handelCoffeeName" />
            </div>

            <div class="my-4">
                <h1 class="header font-mono underline !text-pink-500 !hover:text-pink-200 inline md:block">
                    Best Coffee
                </h1>
                <CoffeeLists :coffees="byPrice" />
            </div>

            <div class="mt-4" v-show="Object.keys(orderItems).length">
                <h1 class="header font-mono underline !text-pink-500 !hover:text-pink-200 inline md:block">
                    Order Coffees
                </h1>
                <CoffeeLists :coffees="orderItems" />
            </div>

        </section>
    </Pannel>

    <!-- <pre>{{ categories }}</pre> -->
</template>
