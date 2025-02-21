import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useContact = defineStore("contact", () => {
  const contacts = ref([]);

  const getContacts = async () => {
    try {
      const res = await axios.get("http://localhost:4001/contacts");
      contacts.value = res.data;
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  return { contacts, getContacts };
});
