import { useAuthApi } from "~/composables/useAuthApi";
import type { Login, User } from "~/types"

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);
    const token = useCookie('_flanksToken', {
        maxAge: 60 * 60
    })

    const setToken = (newToken?: any) => { token.value = newToken }
    const setUser = (newUser?: any) => { user.value = newUser }

    const fetchUserInfo = async () => {
        const { fetchUser } = useAuthApi()
        if (!token.value) return

        try {
            const userInfo = await fetchUser(token.value)
            setUser(userInfo)
        } catch (error) {
            console.error('Failed to fetch user info:', error)
            setUser(null)
        }
    };

    const signIn = async (data: Login) => {
        const { login } = useAuthApi()
        try {
            const res = await login(data)
            setToken(res.token)
            await fetchUserInfo()
        } catch (error) {
            setToken(null)
            setUser(null)
            console.error('Login error:', error)
            throw new Error('Login failed. Please check your email and password.');
        }
    }

    const signOut = () => {
        setToken(null)
        setUser(null)
    }

    return {
        user,
        token,
        setToken,
        setUser,
        signIn,
        signOut,
        fetchUserInfo
    }
})