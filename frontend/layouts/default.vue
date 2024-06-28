<template>
        <Header />
        <SideBar />
        <div class="p-8 sm:ml-64 bg-white dark:bg-gray-900 mt-14">
            <Breadcrumb v-if="route.path !== '/'" />
            <h2 v-if="route.path !== '/'"
                class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                {{ route.meta.title }}
            </h2>
            <slot></slot>
            <Footer />
        </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import { usePositionsStore } from '~/stores/positionsData';

const route = useRoute();

const positionsStore = usePositionsStore();
let intervalId: number | null = null;

onMounted(() => {
  positionsStore.fetchPositions();

  intervalId = window.setInterval(() => {
    positionsStore.fetchPositions();
  }, 3600 * 1000); // 1 hour
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

useHead({
    meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }],
    link: [{ rel: 'icon', type: 'image/png', href: '/flanks-favicon.png' }]
}),
useSeoMeta({
    title: `Flanks App - ${route.meta.title}`,
    description: 'Financial reporting and analysis tool for businesses'
})


</script>