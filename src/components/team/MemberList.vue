<script setup>
defineProps(['member'])
</script>

<template>
    <tr class="bg-slate-100/50 h-[50px]">
        <td class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{{ member.name }}</td>
        <td class="px-4 py-2 whitespace-nowrap text-gray-700">{{ member.email }}</td>
        <td class="px-4 py-2 whitespace-nowrap text-gray-700">{{ member.position }}</td>
        <td class="px-4 py-2 whitespace-nowrap text-gray-700">{{ member.status ? 'active' : 'offline'
            }}
        </td>
    </tr>
</template>