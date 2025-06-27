import React from 'react'

export default function About() {
    return (
        <>
            <section id="about"
                     className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 bg-white text-gray-800 mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                <p className="text-lg leading-relaxed mb-12">
                    I am an experienced software engineer with innovative solutions to everyday problems. In my seven
                    years in this industry,
                    I've honed my analytical thinking and collaboration skills. I love working with cross-functional
                    teams, and I am continuously
                    exploring new technologies—particularly in AI, Machine Learning and Blockchain domains—to build
                    cutting-edge solutions.
                </p>

                <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-6 mb-12">
                    <div className="flex flex-col md:flex-row justify-between border-b pb-4">
                        <div>
                            <h4 className="text-lg font-semibold">Back-end Software Engineer</h4>
                            <p className="text-sm text-gray-500">FPT Software</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Nov 2022 – Now</p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Full Time</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between border-b pb-4">
                        <div>
                            <h4 className="text-lg font-semibold">Back-end Software Engineer</h4>
                            <p className="text-sm text-gray-500">Medicia</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Mar 2022 – Dec 2022</p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Full Time</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between border-b pb-4">
                        <div>
                            <h4 className="text-lg font-semibold">Technical Leader</h4>
                            <p className="text-sm text-gray-500">Techvify</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Oct 2020 – Mar 2022</p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Full Time</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between border-b pb-4">
                        <div>
                            <h4 className="text-lg font-semibold">Full-stack Developer</h4>
                            <p className="text-sm text-gray-500">OpenCommerce</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">May 2020 – Oct 2020</p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Full Time</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <h4 className="text-lg font-semibold">Front-end Intern</h4>
                            <p className="text-sm text-gray-500">VinID</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Oct 2019 – May 2020</p>
                            <span
                                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Internship</span>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div>
                    <h4 className="text-xl font-semibold">Bachelor of Engineering in Electronics and
                        Telecommunications</h4>
                    <p className="text-base text-gray-700">Posts and Telecommunications Institute of Technology
                        (PTIT)</p>
                </div>
            </section>
        </>
    );
}