import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="text-center py-20 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                For any questions please mail me:
            </h2>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <a href="mailto:theanhptit94@gmail.com">theanhptit94@gmail.com</a>
            </p>

            <div className="mt-10 flex justify-center items-center space-x-8 text-gray-600">
                <span>+84 379215933</span>
                <span>theanhptit94@gmail.com</span>
            </div>

            <div className="mt-6 flex justify-center space-x-6 text-xl">
                <a href="https://github.com/Zippochoiloto" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/anh-luong-509905118/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="/assets/Luong_The_Anh_FS_Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                    className="hover:text-green-600"
                >
                    <i className="fas fa-file-download text-xl"></i>
                </a>
            </div>
        </section>
    );
}