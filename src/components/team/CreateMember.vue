<script setup>
import { useTeamStore } from '@/stores/team';

const { teams } = useTeamStore();
const countTeamMember = teams.length;
const form = defineModel();

const submit = () => {
    if (form.value.name === '' || form.value.email === '' || form.value.position === '') {
        alert('Please fill all fields');
        return;
    }
    teams.push({ id: countTeamMember + 1, ...form.value });
}
</script>

<template>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Create Member!</h1>

            <p class="mt-4 text-gray-500">
                Create an account to start managing your team members.
            </p>
        </div>

        <form @submit.prevent="submit" class="mx-auto mt-8 mb-0 max-w-md space-y-4">

            <div>
                <label for="name" class="sr-only">Name</label>
                <div class="relative">
                    <input type="name" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        v-model="form.name" placeholder="Enter Name" />
                </div>
            </div>

            <div>
                <label for="email" class="sr-only">Email</label>
                <div class="relative">
                    <input type="email" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        v-model="form.email" placeholder="Enter email" />
                </div>
            </div>

            <div>
                <label for="Position" class="sr-only">Position</label>
                <div class="relative">
                    <input type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        v-model="form.position" placeholder="Enter Position " />
                </div>
            </div>

            <div class="flex items-end justify-between">
                <button type="submit"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                    Create Member
                </button>
            </div>
        </form>
    </div>
</template>