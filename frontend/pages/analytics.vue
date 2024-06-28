<template>
    <ClientOnly class="bg-white dark:bg-gray-900" fallback-tag="div" fallback="Loading on server...">
        <Chart4/>
    </ClientOnly>
</template>
<script setup lang="ts">
import Chart4 from '../components/ChartAnalysis.vue';
import { initFlowbite } from 'flowbite';
onMounted(() => {
        useFlowbite(() => {
            initFlowbite();
        })
    })
definePageMeta({
    title: 'Analytics',
    description: 'Financial reporting and analysis tool for businesses'
})

</script>