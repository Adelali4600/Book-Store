import { useEffect, useState } from "react";

export default function TimerComp() {
    // نحدد الوقت الإجمالي بالثواني (مثلاً: 10 ساعات و 24 دقيقة و 59 ثانية)
    // الحسبة: (10 * 3600) + (24 * 60) + 59 = 37499 ثانية
    const [totalSeconds, setTotalSeconds] = useState(108000);
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        // إذا وصل العداد للصفر، نتوقف
        if (totalSeconds <= 0) return;

        // تشغيل التايمر كل ثانية
        const timer = setInterval(() => {
            setTotalSeconds((prev) => prev - 1);
        }, 1000);

        // تنظيف التايمر عند إغلاق الصفحة
        return () => clearInterval(timer);
    }, [totalSeconds]);

    useEffect(() => {
        // حساب القيم المنفصلة للعرض
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor((totalSeconds % 3600) / 60));
        setSeconds(totalSeconds % 60);
    }, [totalSeconds]);
    return (
        <span className="countdown font-mono text-2xl">
            <span style={{ "--value": hours, "--digits": 2 }} aria-live="polite">{hours}</span>:
            <span style={{ "--value": minutes, "--digits": 2 }} aria-live="polite">{minutes}</span>:
            <span style={{ "--value": seconds, "--digits": 2 }} aria-live="polite">{seconds}</span>
        </span>
    )
}
