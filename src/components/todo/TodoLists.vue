<script setup>
import TodoCard from './TodoCard.vue';
const props = defineProps(['todos'])

</script>

<template>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
        <template v-for="todo in todos" :key="todo.id">
            <TodoCard :todo="todo" />
        </template>
    </section>
</template>
