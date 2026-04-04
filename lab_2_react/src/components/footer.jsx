import { useEffect, useState } from "react";

function Footer() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        let stored = localStorage.getItem("browserInfo");

        if (!stored) {
            const data = {
                userAgent: navigator.userAgent,
                language: navigator.language,
                cookiesEnabled: navigator.cookieEnabled,
                online: navigator.onLine,
                screen: `${window.screen.width}x${window.screen.height}`
            };

            localStorage.setItem("browserInfo", JSON.stringify(data));
            setInfo(data);
        } else {
            setInfo(JSON.parse(stored));
        }
    }, []);

    return (
        <footer className="text-center text-[15px] text-gray-400 mt-10 pb-4">
            <p>©2026 Артем. Всі права захищені.</p>

            {info && (
                <div className="mt-2 text-[15px] opacity-70">
                    <p><b>Platform:</b> {info.platform}</p>
                    <p><b>Language:</b> {info.language}</p>
                    <p><b>Online:</b> {info.online ? "Yes" : "No"}</p>
                    <p><b>Screen:</b> {info.screen}</p>
                </div>
            )}
        </footer>
    );
}

export default Footer;