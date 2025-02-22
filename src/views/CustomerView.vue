<script setup>
import { useCustomerStore } from '@/stores/customer';
import { onMounted } from 'vue';

const { customers, getCustomers, changeTitle, title, totalCustomer } = useCustomerStore();

getCustomers('http://localhost:4001/customers')
onMounted(() => {
});

setTimeout(function () {
    changeTitle('hey this is test')
}, 2000);

</script>

<template>
    <section>
        <button type="button" @click="changeTitle('change')">{{ title }} (Total customers {{ totalCustomer }})</button>
        <template v-for="customer in customers" :key="customer">
            <li>{{ customer.name }}</li>
        </template>
    </section>
</template>

<style scoped></style>