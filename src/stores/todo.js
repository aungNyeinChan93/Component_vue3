import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref([]);

  const addTodo = (todo) => {
    todos.value.push({ id: todos.value.length + 1, title: todo, done: false });
  };

  const removeTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return { todos, addTodo, removeTodo };
});
