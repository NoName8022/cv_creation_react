import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx";
import About_me from "./components/about_me.jsx";
import ContactInfo from "./components/contact_info.jsx";
import Education from "./components/education.jsx";
import Skills from "./components/skills.jsx";
import Experience from "./components/experience.jsx";
import Addition from "./components/addition.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";

function App() {
    return (
        <div className="bg-gray-300 min-h-screen flex justify-center py-10">
            <div className="w-[210mm] min-h-[297mm] bg-white grid grid-cols-[300px_1fr] shadow-xl">

                <div className="bg-gray-900 text-white p-6 space-y-8">
                    <Profile />
                    <ContactInfo />
                    <Skills />
                    <Addition />
                </div>

                <div className="p-10 space-y-8">
                    <About_me />
                    <Education />
                    <Experience />
                </div>

            </div>
        </div>
    )
}

export default App;
