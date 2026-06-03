const DEFAULT_USERS = [
    {
        id: 1,
        email: "demo@example.com",
        username: "demo_user",
        password: "password123",
        firstName: "Demo",
        lastName: "User",
        phone: "123456789",
        address: "Maadi, Cairo, Egypt."
    }
];

const getUsers = () => {
    const usersStr = localStorage.getItem('registered_users');
    if (!usersStr) {
        localStorage.setItem('registered_users', JSON.stringify(DEFAULT_USERS));
        return DEFAULT_USERS;
    }
    try {
        return JSON.parse(usersStr);
    } catch (e) {
        return DEFAULT_USERS;
    }
};

const saveUsers = (users) => {
    localStorage.setItem('registered_users', JSON.stringify(users));
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const makeError = (message, status = 400) => {
    const err = new Error(message);
    err.response = {
        status,
        data: {
            error: {
                message
            }
        }
    };
    return err;
};

const api = {
    post: async (url, data) => {
        await delay(400);

        if (url === '/auth/local') {
            const { identifier, password } = data;
            const users = getUsers();
            const user = users.find(u => (u.email === identifier || u.username === identifier) && u.password === password);
            if (user) {
                const { password: _, ...userClone } = user;
                return {
                    data: {
                        jwt: `mock-jwt-token-${user.id}`,
                        user: userClone
                    }
                };
            } else {
                throw makeError("Email or password invalid.", 400);
            }
        }

        if (url === '/auth/local/register') {
            const { username, email, password } = data;
            const users = getUsers();
            const exists = users.some(u => u.email === email);
            if (exists) {
                throw makeError("Email is already taken", 400);
            }
            const newUser = {
                id: Date.now(),
                email,
                username: username || email.split('@')[0],
                password,
                firstName: "",
                lastName: "",
                phone: "",
                address: ""
            };
            users.push(newUser);
            saveUsers(users);

            const { password: _, ...userClone } = newUser;
            return {
                data: {
                    jwt: `mock-jwt-token-${newUser.id}`,
                    user: userClone
                }
            };
        }

        if (url === '/auth/forgot-password') {
            const { email } = data;
            const users = getUsers();
            const user = users.find(u => u.email === email);
            if (user) {
                localStorage.setItem('mock_reset_email', email);
                localStorage.setItem('mock_reset_code', '123456');
                return { data: { ok: true } };
            } else {
                throw makeError("Email not found", 404);
            }
        }

        if (url === '/users/verify-code') {
            const { code } = data;
            const savedCode = localStorage.getItem('mock_reset_code');
            if (savedCode && savedCode === code) {
                return { data: { ok: true } };
            } else {
                throw makeError("Invalid or expired verification code", 400);
            }
        }

        if (url === '/auth/reset-password') {
            const { password } = data;
            const resetEmail = localStorage.getItem('mock_reset_email');
            if (!resetEmail) {
                throw makeError("Reset session expired", 400);
            }
            const users = getUsers();
            const userIndex = users.findIndex(u => u.email === resetEmail);
            if (userIndex !== -1) {
                users[userIndex].password = password;
                saveUsers(users);
                localStorage.removeItem('mock_reset_email');
                localStorage.removeItem('mock_reset_code');
                return { data: { ok: true } };
            } else {
                throw makeError("User not found", 404);
            }
        }

        throw makeError(`Mock route POST ${url} not implemented`, 404);
    },

    get: async (url) => {
        await delay(300);

        if (url === '/users/me') {
            const activeUserStr = localStorage.getItem('user') || sessionStorage.getItem('user');
            if (activeUserStr) {
                return {
                    data: JSON.parse(activeUserStr)
                };
            } else {
                throw makeError("Unauthorized", 401);
            }
        }

        throw makeError(`Mock route GET ${url} not implemented`, 404);
    },

    put: async (url, data) => {
        await delay(400);

        const userMatch = url.match(/^\/users\/(\d+)$/);
        if (userMatch) {
            const userId = parseInt(userMatch[1]);
            const users = getUsers();
            const userIndex = users.findIndex(u => u.id === userId);
            if (userIndex !== -1) {
                users[userIndex] = {
                    ...users[userIndex],
                    ...data
                };
                saveUsers(users);

                const { password: _, ...updatedUser } = users[userIndex];

                const isLocal = !!localStorage.getItem('token');
                const sessionUserStr = localStorage.getItem('user') || sessionStorage.getItem('user');
                if (sessionUserStr) {
                    const sessionUser = JSON.parse(sessionUserStr);
                    if (sessionUser.id === userId) {
                        const updatedSessionUser = {
                            ...sessionUser,
                            ...updatedUser
                        };
                        const userStr = JSON.stringify(updatedSessionUser);
                        if (isLocal) {
                            localStorage.setItem('user', userStr);
                        } else {
                            sessionStorage.setItem('user', userStr);
                        }
                    }
                }

                return { data: updatedUser };
            } else {
                throw makeError("User not found", 404);
            }
        }

        throw makeError(`Mock route PUT ${url} not implemented`, 404);
    }
};

export default api;