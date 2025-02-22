import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useTeamStore = defineStore("team", () => {
  const teamName = ref("The best Team");

  const teams = reactive([
    {
      id: 1,
      name: "chan",
      email: "anc@123",
      status: false,
      position: "front-end",
    },
    {
      id: 2,
      name: "susu",
      email: "susu@123",
      status: false,
      position: "back-end",
    },
    {
      id: 3,
      name: "koko",
      email: "koko@123",
      status: false,
      position: "project manager",
    },
    {
      id: 4,
      name: "aungaung",
      email: "aungaung@123",
      status: false,
      position: "Designer",
    },
  ]);

  const form = reactive({
    name: "",
    email: "",
    status: false,
    position: "",
  });

  const changeTeamName = (name) => {
    teamName.value = name;
  };

  return { teams, form, teamName, changeTeamName };
});
