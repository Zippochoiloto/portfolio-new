import React from 'react'
import projects from '../data/project.js'

export default function Projects() {
    return (
        <>
            <section id="projects"
                     className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-16 py-4 sm:px-8 bg-white mb-0">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Projects</h2>
                <p className="text-gray-500 mb-6 text-lg">Things I’ve built so far</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow flex flex-col"
                        >
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <div className="mt-3 flex-1 flex flex-col">
                                <h3 className="font-semibold text-lg">{p.title}</h3>
                                <p className="text-sm text-gray-500">{p.description}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Tech stack: {p.techStack || 'React, Tailwind, ...'}
                                </p>
                                <div className="flex justify-between text-xs mt-3">
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline flex items-center gap-1"
                                    >
                                        <span>Live Preview</span>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                    <a
                                        href={p.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline flex items-center gap-1"
                                    >
                                        <span>View Code</span>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}