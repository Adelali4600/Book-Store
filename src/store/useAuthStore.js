import { create } from 'zustand';
import { getToken, getUser, setToken, setUser, clearAuth } from '../utils/authStorage';

export const useAuthStore = create((set) => ({
    user: getUser(),
    token: getToken(),
    isLoading: false,

    loginAction: (token, user, rememberMe) => {
        setToken(token, rememberMe);
        setUser(user, rememberMe);
        set({ token, user });
    },

    logoutAction: () => {
        clearAuth();
        set({ token: null, user: null });
    },

    updateUserAction: (updatedUser) => {
        const isRemembered = !!localStorage.getItem('token');
        setUser(updatedUser, isRemembered);
        set({ user: updatedUser });
    },

    initialize: () => {
        set({
            user: getUser(),
            token: getToken()
        });
    }
}));
