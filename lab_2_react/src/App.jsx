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

function App() {
    return (
        <div>
            <Header />
            <ContactInfo />
            <About_me />
            <Education />
            <Skills />
            <Experience />
            <Addition />
            <Footer />
        </div>
    )
}

export default App;
