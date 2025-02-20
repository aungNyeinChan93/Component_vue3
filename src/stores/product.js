import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const getProduct = async (url) => {
    const responce = await axios.get(url);
    products.value = await responce.data;
  };
  return { products, getProduct };
});
