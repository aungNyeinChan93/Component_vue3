<script setup>

const todo = defineModel();

const emit = defineEmits(['todoEmit']);
const todoEmit = () => {
    emit('todoEmit', todo.value);
}

</script>

<template>
    <div>
        <div class="flex space-x-2 justify-center items-center">
            <div>
                <input type="text" id="todo" v-model="todo" placeholder="Add todo"
                    class="px-4 py-2 border border-amber-400 rounded text-red-400 w-[450px]" />
            </div>
            <div>
                <button class="px-6 py-2 rounded bg-amber-300" type="button" @click="todoEmit">Add</button>
            </div>
        </div>
    </div>
</template>