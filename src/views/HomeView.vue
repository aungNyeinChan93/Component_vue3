<script setup>
import Button from '@/components/base/Button.vue';
import { useGitHubUserStore } from '@/stores/githubUser';
import { onMounted, onUnmounted, ref } from 'vue';
import useGeneral from '@/composables/useGeneral';

const { gitHubUsers } = useGitHubUserStore();
// console.log(gitHubUsers);

const mySetInterval = setInterval(() => {
  alert('Hover Me please!');
}, 4000);

const cancleSetInerval = () => {
  clearInterval(mySetInterval);
};

const { flash, getData, useStorage } = useGeneral();

const testData = ref([]);

onMounted(async () => {
  testData.value = await getData('https://jsonplaceholder.typicode.com/posts');
  console.log(testData.value);

});

const name = useStorage('name');
const email = useStorage('email');

</script>

<template>
  <main class="grid w-full min-h-screen place-items-center">

    <Button @mouseover="cancleSetInerval" @click="() => flash('success', 'flash Title', 'flash message')">
      <template #icon="{ hover }">
        <span>{{ hover ? "😂" : "😁" }}</span>
      </template>
      <template #default="{ hover }">
        {{ !hover ? ' Hover Me !' : ' Have Fun ' }} {{ hover ? "👍" : "😎" }}
      </template>
    </Button>

    <div class="localStorage ">
      <form @submit.prevent="flash('success', `Your name and email`, `${name} and ${email}`)"
        class="flex flex-col items-center space-y-4">
        <div class="flex justify-center space-x-4 px-10 mt-5">
          <input type="text" v-model="name" placeholder="name" class="border border-gray-300 p-2 rounded-md">
          <input type="text" v-model="email" placeholder="email" class="border border-gray-300 p-2 rounded-md">
          <button type="submit" class="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700">Click</button>
        </div>
      </form>
    </div>

  </main>

</template>
