import './App.css'
import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import About_me from "./components/about_me.jsx";
import ContactInfo from "./components/contact_info.jsx";
import Education from "./components/education.jsx";
import Skills from "./components/skills.jsx";
import Experience from "./components/experience.jsx";
import Addition from "./components/addition.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Reviews from "./components/reviews.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 7 && hour < 21) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-300 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
        }`}>

            <div className="p-4 flex justify-end">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>

            <div className="flex justify-center py-10 flex-grow">
                <div className={`w-[210mm] min-h-[297mm] grid grid-cols-[300px_1fr] shadow-xl transition-all duration-300 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}>

                    <div className="p-6 space-y-8 bg-black text-white">
                        <Profile />
                        <ContactInfo />
                        <Skills />
                        <Addition />
                    </div>

                    <div className="p-10 space-y-8 bg-white text-black">
                        <About_me />
                        <Education />
                        <Experience />
                        <Reviews />
                    </div>

                </div>
            </div>

            <Footer />
            <ContactForm />

        </div>
    );
}

export default App;