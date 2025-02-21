import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const getProduct = async (url) => {
    const responce = await axios.get(url);
    products.value = await responce.data;
  };
  const postProduct = async (url, product) => {
    const res = await axios.post("url", products);
    products.value.push(res.data);
  };
  return { products, getProduct, postProduct };
});
