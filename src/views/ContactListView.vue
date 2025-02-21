<script setup>
import ContactLists from '@/components/contact/ContactLists.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
        <RouterLink :to="{ name: 'contact' }" class="block mt-6 text-center text-blue-500">Go to Contact
        </RouterLink>
        <ContactLists />
    </section>
</template>
