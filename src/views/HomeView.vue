<script setup>
import Button from '@/components/base/Button.vue';
import { useGitHubUserStore } from '@/stores/githubUser';
import { onUnmounted } from 'vue';

const { gitHubUsers } = useGitHubUserStore();
// console.log(gitHubUsers);

const mySetInterval = setInterval(() => {
  alert('Hover Me please!');
}, 4000);

const cancleSetInerval = () => {
  clearInterval(mySetInterval);
};

</script>

<template>
  <main class="grid w-full min-h-screen place-items-center">
    <Button @mouseover="cancleSetInerval">
      <template #icon="{ hover }">
        <span>{{ hover ? "😂" : "😁" }}</span>
      </template>
      <template #default="{ hover }">
        {{ !hover ? ' Hover Me !' : ' Have Fun ' }} {{ hover ? "👍" : "😎" }}
      </template>
    </Button>
  </main>
</template>
