<script setup>
import { useContact } from '@/stores/ccontact';
import SingleContact from './SingleContact.vue';
import useGeneral from '@/composables/useGeneral';

const { contacts, deleteContact } = useContact();
const { flash } = useGeneral();

const destroy = async (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
        await deleteContact(id);
        flash('success', "Succeffully deleted contact", id);
    }
}

</script>

<template>
    <section class="w-full min-h-screen px-10 mt-6">
        <div class="grid grid-cols-2 gap-6">
            <template v-for="contact in contacts" :key="contact.id">
                <SingleContact :contact="contact" @click="destroy(contact.id)" />
            </template>
        </div>
    </section>
</template>
