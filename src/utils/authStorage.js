export const getToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || null;
};

export const setToken = (token, rememberMe = false) => {
    if (rememberMe) {
        localStorage.setItem('token', token);
        sessionStorage.removeItem('token');
    } else {
        sessionStorage.setItem('token', token);
        localStorage.removeItem('token');
    }
};

export const getUser = () => {
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (!userStr) return null;
    try {
        return JSON.parse(userStr);
    } catch (e) {
        console.error("Failed to parse user from storage:", e);
        return null;
    }
};

export const setUser = (user, rememberMe = false) => {
    const userStr = JSON.stringify(user);
    if (rememberMe) {
        localStorage.setItem('user', userStr);
        sessionStorage.removeItem('user');
    } else {
        sessionStorage.setItem('user', userStr);
        localStorage.removeItem('user');
    }
};

export const clearAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
};
