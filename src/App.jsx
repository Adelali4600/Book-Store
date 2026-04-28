import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes/RouterApp";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const lang = i18n.language || 'en';
        document.documentElement.lang = lang;
    }, [i18n.language]);

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Toaster position="top-center" reverseOrder={false}>
                    {({ message }) => (
                        <div className="bg-white text-mainColor p-4 rounded shadow">
                            {message}
                        </div>
                    )}
                </Toaster>
                <ScrollToTopButton />
                <RouterApp />
            </BrowserRouter>
        </>
    )
}