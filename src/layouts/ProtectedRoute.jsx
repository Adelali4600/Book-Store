import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../api/Axios'
import { getToken, clearAuth, setUser } from '../utils/authStorage'

export default function ProtectedRoute() {
    const navigate = useNavigate();
    const token = getToken();

    useEffect(() => {
        if (!token) {
            navigate('/login');
            toast.error("Please login first!");
            return;
        }

        api.get('/users/me')
            .then((res) => {
                setUser({
                    id: res.data.id,
                    email: res.data.email,
                    username: res.data.username,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                }, !!localStorage.getItem('token'));
            })
            .catch((err) => {
                console.log(err.data);
                toast.error("Token is fake or expired!");
                clearAuth();
                navigate('/login');
            });
    }, [navigate, token]);

    return token && <Outlet />;
}
