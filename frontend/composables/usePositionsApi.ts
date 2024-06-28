import type { Position } from "~/types";

export const usePositionsApi = () => {
  const config = useRuntimeConfig();

  const getAll = async (): Promise<Position[]> => {
    try {
      return await $fetch(`${config.public.baseURL}/api/positions`);
    } catch (error) {
      console.error('Failed to fetch positions:', error);
      return [];
    }
  };

  const getById = async (id: string) => {
    try {
      const { data: positions } = await useFetch<Position[]>(`${config.public.baseURL}/api/positions`);
      const position = positions.value?.find(p => p.id === id);
      return position || null;
    } catch (error) {
      console.error('Failed to fetch position:', error);
      return {};
    }
  }

  return {
    getAll,
    getById
  }
};
