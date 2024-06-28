<template>
    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Position Information</h5>
        </div>
        <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4" v-for="(value , key) in position">
                    <div class="flex items-center justify-between">
                        <div class="flex-1 min-w-0">
                            <p class="font-medium text-gray-900 truncate dark:text-white">
                                {{ formatKey(key) }}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {{ value }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { id } = route.params

const { data: position } = await useFetch('http://localhost:4000/api/positions', {
    transform: (response) => {
        return response.find((p) => p.id === id)
    }
})

const formatKey = (key) => {
    return key.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
</script>
