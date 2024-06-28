<template>
  <div class="dark:bg-gray-800" :class="$colorMode.preference=='dark' ? 'dark' : ''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>