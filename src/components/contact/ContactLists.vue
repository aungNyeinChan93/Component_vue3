<script setup>
import { useContact } from '@/stores/ccontact';
import SingleContact from './SingleContact.vue';

const { contacts, getContacts } = useContact();


</script>

<template>
    <section class="w-full min-h-screen px-10 mt-6">
        <div class="grid grid-cols-2 gap-6">
            <template v-for="contact in contacts" :key="contact.id">
                <SingleContact :contact="contact" />
            </template>
        </div>
    </section>
</template>
