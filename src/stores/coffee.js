import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCoffeeStore = defineStore("coffee", () => {
  const coffees = ref([]);
  const getCoffee = async (url) => {
    const res = await axios.get(url);
    const { data } = await res;
    coffees.value = data;
  };
  return { coffees, getCoffee };
});
