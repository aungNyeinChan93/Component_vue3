<script setup>
import { useTodoStore } from '@/stores/todo';
defineProps(['todo']);

const todoStore = useTodoStore();

const remove = (id) => {
    if (confirm('Are you sure you want to delete this todo?')) {
        todoStore.removeTodo(id);
    }
}

</script>

<template>
    <article
        class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]">
        <div class="rounded-[10px] bg-white p-4 !pt-4 sm:p-6">
            <time :datetime="new Date().toISOString().split('T')[0]" class="block text-xs text-gray-500"> {{ new
                Date().getDate() }}-{{ new Date().getMonth() + 1 }}-{{ new Date().getFullYear() }}
            </time>

            <div>
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                    <span class="text-red-500 text-xl ">{{ todo.title }}</span>
                </h3>
            </div>

            <div class="mt-4 flex flex-wrap gap-1">
                <button type="button" @click="remove(todo.id)"
                    class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
                    Remove
                </button>
            </div>
        </div>
    </article>
</template>