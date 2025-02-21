<script setup>
import { inject, onMounted, ref } from 'vue';
import useGeneral from '@/composables/useGeneral';
import { RouterLink } from 'vue-router';

const { flash, postData } = useGeneral();
const { form, contacts } = inject('form')
const contactResult = ref();

const submit = async () => {
    flash(
        'success',
        "Success send!",
        `Name is${form.name}, Email is ${form.email}, Phone is ${form.phone}, Message is ${form.message}`);
    contactResult.value = await postData('http://localhost:4001/contacts', form);
}

</script>

<template>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 lg:py-12">
                    <p class="max-w-xl text-lg">
                        <strong>Show </strong>
                        <RouterLink to="/contacts/list" class="text-pink-600">Contact Lists</RouterLink>
                        <span class="text-sm text-red-600"> ( You Have {{ contacts?.length }} Contacts )</span>
                    </p>

                    <div class="mt-8">
                        <a href="#" class="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

                        <address class="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                    </div>
                </div>

                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form @submit.prevent="submit" class="space-y-4">
                        <div>
                            <label class="sr-only" for="name">Name</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text"
                                v-model="form.name" id="name" />
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="email">Email</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address"
                                    v-model="form.email" type="email" id="email" />
                            </div>

                            <div>
                                <label class="sr-only" for="phone">Phone</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Phone Number"
                                    v-model="form.phone" type="tel" id="phone" />
                            </div>
                        </div>



                        <div>
                            <label class="sr-only" for="message">Message</label>

                            <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message"
                                v-model="form.message" rows="8" id="message"></textarea>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                Contact Me
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- <pre>{{ contactResult }}</pre> -->
</template>