<script setup>
import Products from '@/components/product/Products.vue';
import InjetProduct from '@/components/product/InjetProduct.vue';
import { useProductStore } from '@/stores/product';
import { onMounted, onUnmounted } from 'vue';
import { provide } from 'vue';

const { products, getProduct } = useProductStore();

onMounted(() => getProduct(`https://fakestoreapi.com/products`));

provide('ourProducts', products);



</script>

<template>
    <section>
        <div v-if="products">
            <Products :products="products" />
            <InjetProduct />
        </div>
        <div v-else>

        </div>
    </section>
</template>
