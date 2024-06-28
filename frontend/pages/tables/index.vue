<template>
<div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <PositionTable />
</div>

  </template>
  
  <script setup>
  import PositionTable from '../components/PositionTable.vue'

  definePageMeta({
    title: 'Tables',
    description: 'Financial reporting and analysis tool for businesses'
})
  </script>
  
  <style scoped>
  /* Add any styles if needed */
  </style>
  