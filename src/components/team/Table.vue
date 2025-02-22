<script setup>
import MemberList from './MemberList.vue';
const props = defineProps({
    members: Array
});
</script>

<template>

    <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr class="bg-gray-600 !text-white h-[50px]">
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white">Name</th>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white">Email</th>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white">Role</th>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white">Status</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-red-200">
                <template v-for="member in members" :key="member.id">
                    <MemberList :member="member" />
                </template>
            </tbody>
        </table>
    </div>

</template>