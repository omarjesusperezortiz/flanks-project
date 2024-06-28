export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();

    if( to.path !== '/login' ) {
        if (!userStore.user) {
            return await navigateTo("/login");
        }
    }
  });
  