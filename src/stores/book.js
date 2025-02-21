import { reactive, ref } from "vue";

export const book = {
  bookName: ref("Software Developer"),
  author: ref("Aung"),
  books: ref(["Vue 3", "React", "Angular", "Node", "Express"]),
  bestSeller: reactive({
    name: "Vue 3",
    year: 2021,
    price: 10000,
    sold: 1000,
    cover: "https://randomuser.me/api/portraits/men/25.jpg",
  }),
};
