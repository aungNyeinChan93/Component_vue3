<script setup>
import SingleProduct from './SingleProduct.vue';
const props = defineProps({
    products: { type: Array }
});
</script>

<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product From Props</h2>

                <p class="mt-4 max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                    dicta incidunt est ipsam, officia dolor fugit natus?
                </p>
            </header>

            <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <template v-for="product in products" :key="product.id">
                    <SingleProduct :product="product" />
                </template>
            </ul>
        </div>
    </section>
</template>