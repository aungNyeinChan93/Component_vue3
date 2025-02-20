<script setup>
import Card from '@/components/base/Card.vue';
import SingleCard from '@/components/base/SingleCard.vue';
import { useGitHubUserStore } from '@/stores/githubUser';
import { onMounted } from 'vue';

const { gitHubUsers, getUser } = useGitHubUserStore();
onMounted(() => getUser('https://api.github.com/users'));
</script>

<template>
  <section>
    <div class="grid grid-col-1 md:grid-cols-4 gap-4 px-10 mt-6">
      <SingleCard userName="aungNyeinChan93" />
      <SingleCard userName="aungNyeinChan93" />
      <SingleCard userName="aungNyeinChan93" />
      <SingleCard userName="aungNyeinChan93" />
    </div>

    <div class="grid grid-col-1 md:grid-cols-4 gap-4 px-10 mt-6">
      <template v-for="user in gitHubUsers" :key="user.id">
        <Card :user="user" />
      </template>
    </div>

  </section>
</template>

<style scoped></style>