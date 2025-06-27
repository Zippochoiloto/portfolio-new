import React from 'react'
import profile from '../assets/images/profile.jpeg'
import profileSmall from "../assets/images/profile_Small.jpeg"
import profileMedium from "../assets/images/profile_Medium.jpeg"
import profileLarge from "../assets/images/profile_Large.jpeg"

export default function Home() {
    const handleScroll = (e, id) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <header className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-4 bg-white shadow-sm mb-0">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {'<Andy />'}
                </div>
                <nav className="flex items-center gap-6 text-lg font-medium text-gray-800">
                    <a onClick={(e) => handleScroll(e, 'about')} className="hover:text-blue-500">About</a>
                    <a onClick={(e) => handleScroll(e, 'techstack')} className="hover:text-blue-500">Tech Stack</a>
                    <a onClick={(e) => handleScroll(e, 'projects')} className="hover:text-blue-500">Projects</a>
                    <a onClick={(e) => handleScroll(e, 'contact')} className="hover:text-blue-500">Contact</a>
                    <a href="https://github.com/Zippochoiloto" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github text-xl hover:text-black"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/anh-luong-509905118/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin text-xl hover:text-blue-700"></i>
                    </a>
                    <a
                        href="/assets/Luong_The_Anh_FS_Developer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Resume"
                        className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-md hover:from-green-500 hover:to-green-700 transition"
                    >
                        Download CV
                    </a>
                </nav>
            </header>
            <section
                id="home"
                className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 transition-all duration-1000 ease-in-out mb-0"
            >
                {/* Text block */}
                <div className="mt-12 md:mt-0 max-w-md animate-fade-in">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 flex items-center">
                        Hi<span className="ml-2">👋</span>
                    </h1>
                    <h2 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900">
                        My name is{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Luong The Anh (Andy)
          </span>
                    </h2>
                    <p className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">
                        I build innovative web solutions.
                    </p>
                </div>

                {/* Avatar */}
                <div className="relative animate-slide-in">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-purple-400 to-blue-400">
                        <img
                            src={profile}
                            srcSet={`
                            ${profileSmall} 640w,
                            ${profileMedium} 1024w,
                            ${profileLarge} 1440w
                        `}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            alt="Andy Avatar"
                            className="w-full h-full object-cover rounded-full bg-white"
                        />
                    </div>
                </div>
            </section>
        </>

    )
}