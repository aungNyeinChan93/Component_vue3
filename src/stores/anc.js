import { reactive } from "vue";

export const anc = reactive({
  name: "aung",
  age: 31,
  address: "yangon",
  phone: "094567890",
  email: "aungnyeinchan@123",
  position: "software developer",
  avatar: "https://randomuser.me/api/portraits/men/25.jpg",
  skill: [
    {
      name: "html",
      level: "80%",
    },
    {
      name: "css",
      level: "70%",
    },
    {
      name: "js",
      level: "60%",
    },
    {
      name: "vue",
      level: "50%",
    },
    {
      name: "react",
      level: "40%",
    },
    {
      name: "angular",
      level: "30%",
    },
    {
      name: "node",
      level: "20%",
    },
    {
      name: "express",
      level: "10%",
    },
  ],
});
