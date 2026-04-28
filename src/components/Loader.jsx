import { useTranslation } from "react-i18next";

export default function Loader() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-mainColor rounded-full animate-spin mb-4 shadow-sm"></div>
            <p className="text-frameColor font-semibold tracking-[0.2em] animate-pulse text-sm">{t('loader.loading')}</p>
        </div>
    );
}
