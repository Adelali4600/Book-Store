import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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

export default function RouterApp() {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false}>
                {({ message }) => (
                    <div className="bg-white text-mainColor p-4 rounded shadow">
                        {message}
                    </div>
                )}
            </Toaster>
            <Routes>
                <Route element={<Mainlayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="books" element={<BooksPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
                {/* Auth Pages */}
                <Route element={<BeforeLogin />} >
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="add-code" element={<AddCodePage />} />
                    <Route path="reset-password" element={<ResetPasswordPage />} />
                    <Route path="forget-password" element={<ForgetPasswordPage />} />
                </Route>
            </Routes>
        </>
    )
}