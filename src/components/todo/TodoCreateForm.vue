<script setup>

const todo = defineModel();

const emit = defineEmits(['todoEmit']);
const todoEmit = () => {
    emit('todoEmit', todo.value);
}

</script>

<template>
    <div
        class="flex space-x-2 justify-start md:justify-center items-start space-y-4 md:space-y-0 md:items-center flex-col  md:flex-row">
        <div>
            <input type="text" id="todo" v-model="todo" placeholder="Add todo"
                class="px-4 py-2 border border-amber-400 rounded text-red-400 w-[420px]" />
        </div>
        <div>
            <button class="px-6 py-2 rounded bg-amber-300" type="button" @click="todoEmit">Add</button>
        </div>
    </div>
</template>