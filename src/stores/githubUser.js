import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGitHubUserStore = defineStore("githubUser", () => {
  const gitHubUsers = ref([]);

  const getUser = async (url) => {
    const res = await axios.get(url);
    const { data } = res;
    gitHubUsers.value = data;
  };

  return { gitHubUsers, getUser };
});
