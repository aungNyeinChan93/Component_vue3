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

  const postContact = async (contact) => {
    try {
      const res = await axios.post("http://localhost:4001/contacts", contact);
      contacts.value.push(res.data);
    } catch (error) {
      console.error("Failed to create contact:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/contacts/${id}`);
      // contacts.value = contacts.value.filter((contact) => contact.id !== id);
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  return { contacts, getContacts, postContact, deleteContact };
});
