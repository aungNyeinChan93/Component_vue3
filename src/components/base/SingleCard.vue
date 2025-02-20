<script setup>
import { ref } from 'vue';

const props = defineProps({
    userName: {
        type: String,
        required: true,
    }
})
const user = ref({});

fetch(`https://api.github.com/users/${props.userName}`)
    .then(async (response) => {
        const data = await response.json()
        user.value = data;
    })
</script>

<template>
    <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div class="flex items-center gap-4">
            <img alt="" :src="user?.avatar_url" class="size-16 rounded-full object-cover" />

            <div>
                <h3 class="text-lg font-medium text-white">{{ user.login }}</h3>

                <div class="flow-root">
                    <ul class="-m-1 flex flex-wrap">
                        <li class="p-1 leading-none">
                            <a :href="user.html_url" class="text-xs font-medium text-gray-300"> GitHub </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ul class="mt-4 space-y-2">
            <li>
                <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                    <strong class="font-medium text-white">{{ user.type }}</strong>
                </a>
            </li>
        </ul>
    </article>
</template>