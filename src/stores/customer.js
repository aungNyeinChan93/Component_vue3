import axios from "axios";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
  // state
  state: () => ({
    customers: [],
    title: "This is Customer Title! yah..",
  }),

  // action
  actions: {
    async getCustomers(url) {
      const { data } = await axios.get(url);
      this.customers = data;
    },

    changeTitle(title) {
      this.title = title;
    },
  },

  //   getter
  getters: {
    totalCustomer: (state) => {
      return state.customers.length;
    },
  },
});
