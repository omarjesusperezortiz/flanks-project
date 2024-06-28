import type { Login, User } from '~/types';

export const useAuthApi = () => {
  const config = useRuntimeConfig();

  const login = async (data: Login) => {
    return await $fetch<{ token: string }>(`${config.public.baseURL}/api/login`, {
      method: 'POST',
      body: data,
    });
  };

  const fetchUser = async (token: string) => {
    return await $fetch<User>(`${config.public.baseURL}/api/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return {
    login,
    fetchUser,
  };
};
