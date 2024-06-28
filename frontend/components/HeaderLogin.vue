<template>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <ColorScheme>
                        <a href="/" class="flex ms-2 md:me-24">
                            <img :src="$colorMode.preference === 'dark' ? '/flanks-logo.webp' : '/flanks-logo-black.webp'" alt="Flowbite logo"
                                class="w-26 h-10">
                        </a>
                    </ColorScheme>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-2 items-center ms-3">
                        <ColorScheme>
                            <button id="themeButton" @click="setColorTheme($colorMode.preference == 'light' ? 'dark' : 'light')"
                                class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg v-if="useColorMode().preference == 'light'" class="w-5 h-5" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-5 h-5" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                </svg>
                            </button>
                        </ColorScheme>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">

type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

const useStore = useUserStore()

const logout = () => {
    useStore.signOut()
    navigateTo('/login', { replace: true })
}
</script>