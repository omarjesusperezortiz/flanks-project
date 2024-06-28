export const usePositionsApi = () => {
    const config = useRuntimeConfig();
  
    const getAll = async () => {
      return await $fetch(`${config.public.baseURL}/api/positions`);
    };
  
    return {
      getAll,
    }
  }