import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../api/Axios'
import { useAuthStore } from '../store/useAuthStore'

export default function ProtectedRoute() {
    const navigate = useNavigate();
    const { token, updateUserAction, logoutAction } = useAuthStore();

    useEffect(() => {
        if (!token) {
            navigate('/login');
            toast.error("Please login first!");
            return;
        }

        api.get('/users/me')
            .then((res) => {
                updateUserAction({
                    id: res.data.id,
                    email: res.data.email,
                    username: res.data.username,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                });
            })
            .catch((err) => {
                console.log(err);
                toast.error("Token is fake or expired!");
                logoutAction();
                navigate('/login');
            });
    }, [navigate, token, updateUserAction, logoutAction]);

    return token && <Outlet />;
}
