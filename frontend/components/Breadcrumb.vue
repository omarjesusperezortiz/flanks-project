<template>
  <nav class="flex mb-4" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="inline-flex items-center">
        <div class="flex items-center">
          <template v-if="index !== 0">
            <svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
          </template>
          <template v-if="breadcrumb && breadcrumb.to">
            <NuxtLink :to="breadcrumb.to"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg v-if="index === 0" class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              {{ breadcrumb.label }}
            </NuxtLink>
          </template>
          <template v-else>
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{ breadcrumb.label
              }}</span>
          </template>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">

const route = useRoute();

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(path => path);
  const breadcrumbsArray = paths.map((path, index) => {
    const to = '/' + paths.slice(0, index + 1).join('/');
    return {
      label: path.charAt(0).toUpperCase() + path.slice(1),
      to: index === paths.length - 1 ? null : to
    };
  });

  return [{ label: 'Home', to: '/' }, ...breadcrumbsArray];
});
</script>
<style></style>