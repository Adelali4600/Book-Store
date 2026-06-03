import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/Authpages/LoginPage";
import SignupPage from "../pages/Authpages/SignupPage";
import AddCodePage from "../pages/Authpages/AddCodePage";
import ResetPasswordPage from "../pages/Authpages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/Authpages/ForgetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import BeforeLogin from "../layouts/BeforeLogin";
import Mainlayout from "../layouts/Mainlayout";
import ProtectedRoute from "../layouts/ProtectedRoute";
import MyCartPage from "../pages/MyCartPage";
import WishListPage from "../pages/WishListPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function RouterApp() {
    return (
        <>
            <Routes>
                {/* ================= Public Pages with Main Layout ================= */}
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="books" element={<BooksPage />} />
                    <Route path="about" element={<AboutPage />} />

                    {/* ================= Protected Pages with Main Layout ================= */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="cart" element={<MyCartPage />} />
                        <Route path="wishlist" element={<WishListPage />} />
                    </Route>
                </Route>
                {/* ================= Auth Pages ================= */}
                <Route element={<BeforeLogin />} >
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="add-code" element={<AddCodePage />} />
                    <Route path="reset-password" element={<ResetPasswordPage />} />
                    <Route path="forget-password" element={<ForgetPasswordPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}