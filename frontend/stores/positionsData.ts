export const usePositionsStore = defineStore('positions', () => {
    const dataPositions = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchPositions = async () => {
        const { getAll } = usePositionsApi();
        loading.value = true;
        error.value = null;
        try {
            dataPositions.value = await getAll();
        } catch (err) {
          error.value = err;
          dataPositions.value = []; // Ensure default empty array on error
        } finally {
          loading.value = false;
        }
      };
  
    return {
        dataPositions,
      loading,
      error,
      fetchPositions,
    };
  });