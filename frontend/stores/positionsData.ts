export const usePositionsStore = defineStore('positions', () => {
  const positions = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const lastFetched = ref<Date | null>(null);

  const { $fetch } = useNuxtApp();
  const config = useRuntimeConfig();

  const fetchPositions = async () => {
    if (positions.value.length > 0 && lastFetched.value) {
      const now = new Date();
      if ((now.getTime() - lastFetched.value.getTime()) < 3600 * 1000) { // 1 hour
        return;
      }
    }

    loading.value = true;
    error.value = null;
    try {
      positions.value = await $fetch(`${config.public.baseURL}/api/positions`);
      lastFetched.value = new Date();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    positions,
    loading,
    error,
    fetchPositions,
  };
});
