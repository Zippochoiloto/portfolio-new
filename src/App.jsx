import React from 'react'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";


export default function App() {
    return (
        <div className=" space-y-16 scroll-smooth" >
            <Home/>
            <About/>
            <TechStack/>
            <Projects/>
            <Contact/>
        </div>
    )
}