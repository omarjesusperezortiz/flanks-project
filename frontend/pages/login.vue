<template>
    <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" @submit.prevent="submitForm">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    email</label>
                <input type="text" v-model="formData.email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com" required />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    password</label>
                <input type="password" v-model="formData.password" id="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required />
            </div>
            <div class="flex items-start">
                <div class="flex items-start">
                </div>
                <a href="https://www.flanks.io/contact"
                    class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                to your account</button>
            <div v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
            </div>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="https://www.flanks.io/contact"
                    class="text-blue-700 hover:underline dark:text-blue-500">Contact Flanks.io</a>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';

definePageMeta({
    layout: 'auth',
    middleware: ['already-auth']
});

const formData = ref({
    email: '',
    password: ''
});

const errorMessage = ref('')

const userStore = useUserStore()

const submitForm = async () => {
    try {
        await userStore.signIn({
            username: formData.value.email,
            password: formData.value.password
        });
        await navigateTo('/', { replace: false });
    } catch (error) {
        errorMessage.value = 'Login failed. Please check your email and password.';
    }
}
</script>