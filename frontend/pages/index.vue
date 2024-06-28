<template>
    <Chart />
</template>
<script setup lang="ts">
import Chart from '../components/Chart.vue';
import { initFlowbite } from 'flowbite';
onMounted(() => {
        useFlowbite(() => {
            initFlowbite();
        })
    })
definePageMeta({
    title: 'Home',
    description: 'Financial reporting and analysis tool for businesses'
})
</script>