<script setup>
import ContactForm from '@/components/contact/ContactForm.vue';
import { onMounted, provide, reactive } from 'vue';
import { useContact } from '@/stores/ccontact';

const { contacts, getContacts } = useContact();

onMounted(async () => {
    await getContacts();
});

const form = reactive({
    id: crypto.randomUUID(),
    name: '',
    email: '',
    phone: '',
    message: ''
})

provide('form', { form, contacts });

</script>

<template>
    <section>
        <ContactForm />
    </section>
</template>
