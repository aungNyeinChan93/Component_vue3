import Swal from "sweetalert2";
import { ref, watch } from "vue";

export default function () {
  const flash = (icon, title, message) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    });
  };

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const useStorage = (key) => {
    const val = ref(JSON.parse(localStorage.getItem(key)));

    watch(val, () => {
      savaStorage();
    });

    const savaStorage = () => {
      if (val.value == "") {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(val.value));
      }
    };

    return val;
  };

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return { flash, getData, useStorage, postData };
}
