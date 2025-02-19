<script setup>
import Button from '@/components/base/Button.vue';
</script>

<template>
  <main class="grid w-full min-h-screen place-items-center">
    <Button>
      <template #icon="{ hover }">
        <span>{{ hover ? "😂" : "😁" }}</span>
      </template>
      <template #default="{ hover }">
        {{ !hover ? ' Hover Me !' : ' Have Fun ' }} {{ hover ? "👍" : "😎" }}
      </template>
    </Button>
  </main>
</template>
