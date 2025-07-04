import React, { useState, useEffect } from 'react'
import botIcon from '../assets/images/robot-assistant.png'
import userAvatar from '../assets/images/user_avatar.png'
import { motion } from 'framer-motion'

export default function ChatBox({ onClose }) {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hi! Ask me anything about Andy's portfolio." },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async () => {
        if (!input.trim()) return
        const userMessage = { sender: 'user', text: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch(`${import.meta.env.VITE_AI_AGENT_URL}/ask-openai`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ q: userMessage.text }),
            })
            const data = await response.json()
            setMessages(prev => [...prev, { sender: 'bot', text: data.answer || 'Sorry, no response.' }])
        } catch (err) {
            console.log('err', err)
            setMessages(prev => [...prev, { sender: 'bot', text: 'Error: Unable to connect to assistant.' }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 w-[370px] h-[500px] bg-white rounded-xl shadow-xl flex flex-col border border-gray-300 z-50"
        >
        <div className="fixed bottom-6 right-6 w-[370px] h-[500px] bg-white rounded-xl shadow-xl flex flex-col border border-gray-300 z-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-t-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={botIcon} alt="AI" className="w-6 h-6 rounded-full bg-white" />
                    <div>
                        <p className="font-semibold leading-4">Andy Assistant</p>
                        <p className="text-xs text-green-200">🟢 Online</p>
                    </div>
                </div>
                <button onClick={onClose} className="text-xl">×</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 text-sm">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`flex items-end gap-2 max-w-[75%] ${msg.sender === 'bot' ? '' : 'flex-row-reverse'}`}>
                            <img
                                src={msg.sender === 'bot' ? botIcon : userAvatar}
                                alt={msg.sender}
                                className="w-6 h-6 rounded-full border"
                            />
                            <div className={`p-3 rounded-lg ${msg.sender === 'bot' ? 'bg-white border text-gray-700' : 'bg-purple-600 text-white'}`}>
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="flex items-end gap-2 max-w-[75%]">
                            <img src={botIcon} alt="AI" className="w-6 h-6 rounded-full border" />
                            <div className="p-3 rounded-lg bg-white border text-gray-500 italic animate-pulse">
                                <span className="animate-bounce">...</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="border-t p-3 bg-white shadow-xl border border-gray-300 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message here..."
                    className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none text-black"
                />
                <button
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-full text-sm"
                >
                    Send
                </button>
            </div>
        </div>
        </motion.div>
    )
}