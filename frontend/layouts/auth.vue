<template>
    <HeaderLogin />
    <div class="flex justify-center items-center p-5 bg-white dark:bg-gray-900 antialiased min-h-screen">
        <slot />
    </div>
  </template>
  <script setup lang="ts">
    import HeaderLogin from '../components/HeaderLogin.vue'
    </script>
  <style scoped>
  </style>