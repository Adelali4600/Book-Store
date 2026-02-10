import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import api from '../api/Axios'
import toast from 'react-hot-toast'
export default function Mainlayout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    useEffect(() => {
        // 1. لو مفيش توكين أصلاً، ملوش لازمة نكلم السيرفر
        if (!token) {
            navigate('/login');
            return;
        }

        // 2. لو فيه توكين، نبعته للسيرفر نتأكد هو سليم ولا "مضروب"
        api.get('/users/me', {
            headers: {
                'Authorization': `Bearer ${token}`, // استخدمنا الـ token الموجود فعلاً
            }
        })
            .catch((err) => {
                // لو السيرفر رد بـ 401 (يعني التوكين مزيف أو منتهي)
                console.log(err.data);
                toast.error("Token is fake or expired!");
                localStorage.removeItem('token') || sessionStorage.removeItem('token'); // امسح التوكين المضروب
                navigate('/login'); // اطرده لصفحة الدخول
            });
    }, [navigate, token]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
