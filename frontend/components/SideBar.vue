<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li v-for="item in sidebarItems" :key="item.name">
                    <NuxtLink :to="item.href"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon :name="item.icon"
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span class="flex-1 ms-3 whitespace-nowrap">{{ item.name }}</span>
                        <span v-if="item.badge"
                            class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{{
                    item.badge }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">

interface SidebarItem {
    name: string
    href: string
    icon: string
    badge?: string
}

const sidebarItems = ref<SidebarItem[]>([
    {
        name: 'Dashboard',
        href: '/',
        icon: 'mdi-home',
    },
    {
        name: 'Analytics',
        href: '/analytics',
        icon: 'mdi-chart-bar',
    },
    {
        name: 'Tables',
        href: '/tables',
        icon: 'mdi-table',
        // badge: '3',
    },
    // {
    //     name: 'Reports',
    //     href: '/reports',
    //     icon: 'mdi-file-chart',
    // }
])
</script>

<style scoped>
</style>