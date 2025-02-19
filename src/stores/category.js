import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const getCategory = async (url) => {
    const response = await axios.get(url);
    const { data } = await response;
    categories.value = data;
  };
  return { categories, getCategory };
});
