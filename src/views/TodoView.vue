<script setup>
import { provide, ref } from 'vue';
import TodoCreateForm from '@/components/todo/TodoCreateForm.vue';
import { useTodoStore } from '@/stores/todo';
import TodoLists from '@/components/todo/TodoLists.vue';

const todo = ref()
const todoStore = useTodoStore();

const handleTodoEmmit = (newtodo) => {
    if (newtodo !== '') {
        todoStore.addTodo(newtodo);
        todo.value = '';
    }
}

</script>


<template>
    <section>
        <TodoCreateForm v-model="todo" @todoEmit="handleTodoEmmit" />
        <div v-if="todoStore.todos" class="mt-5">
            <TodoLists :todos="todoStore.todos" />
        </div>
    </section>
</template>
