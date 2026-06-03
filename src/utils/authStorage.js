const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const getToken = () =>
    localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

export const getUser = () => {
    const stored = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
    if (!stored) return null;
    try {
        return JSON.parse(stored);
    } catch {
        return null;
    }
};

export const setToken = (jwt, rememberMe = false) => {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    (rememberMe ? localStorage : sessionStorage).setItem(TOKEN_KEY, jwt);
};

export const setUser = (user, rememberMe = false) => {
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(USER_KEY);
    (rememberMe ? localStorage : sessionStorage).setItem(USER_KEY, JSON.stringify(user));
};

export const setAuth = (jwt, user, rememberMe = false) => {
    setToken(jwt, rememberMe);
    setUser(user, rememberMe);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
};

export const removeUser = () => {
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(USER_KEY);
};

export const clearAuth = () => {
    removeToken();
    removeUser();
};

export const isAuthenticated = () => !!getToken();
