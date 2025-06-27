import React from 'react'

export default function TechStack() {
    const stacks = [
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg', name: 'HTML5' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', name: 'CSS3' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', name: 'React' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', name: 'Git' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', name: 'NestJS' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg', name: 'Web Storm' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', name: 'Docker' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg', name: 'Kubernetes' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', name: 'Postgresql' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', name: 'Mongodb' },
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', name: 'Python' },
    ]

    return (
        <>
            <section id="techstack"
                     className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 bg-white text-gray-800 mb-0">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">My Tech Stack</h2>
                <p className="text-base text-gray-700 mb-6">Technologies I've been working with recently</p>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {stacks.map((s) => (
                        <div key={s.name} className="flex flex-col items-center w-28 sm:w-32 md:w-36">
                            <div
                                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                />
                            </div>
                            <span className="mt-3 text-sm text-center text-gray-800">{s.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}