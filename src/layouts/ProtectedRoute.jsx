import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../api/Axios'

export default function ProtectedRoute() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    useEffect(() => {
        // 1. لو مفيش توكين أصلاً ملوش لازمة نكلم السيرفر
        if (!token) {
            navigate('/login');
            toast.error("Please login first!");
            return;
        }

        // 2. لو فيه توكين نبعته للسيرفر نتأكد هو سليم ولا مضروب
        api.get('/users/me', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .catch((err) => {
                console.log(err.data);
                toast.error("Token is fake or expired!");
                localStorage.removeItem('token') || sessionStorage.removeItem('token');
                navigate('/login');
            });
    }, [navigate, token]);

    return token && <Outlet />;
}
