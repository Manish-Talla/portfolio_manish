"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { getChatbotResponse } from "@/lib/chatbotLogic";

type Message = {
    id: string;
    sender: "user" | "ai";
    text: string;
};

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome-1",
            sender: "ai",
            text: "Hi! I'm Manish's Personal AI Assistant.",
        },
        {
            id: "welcome-2",
            sender: "ai",
            text: "I can tell you about his projects, skills, or experience. How can I help you today?",
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: inputValue.trim(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");

        // Simulate AI thinking delay
        setTimeout(() => {
            const aiResponseText = getChatbotResponse(userMsg.text);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "ai",
                text: aiResponseText,
            };
            setMessages((prev) => [...prev, aiMsg]);
        }, 600);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:bg-blue-500 hover:scale-110 hover:shadow-blue-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : ''}`}
                aria-label="Open Chat Assistant"
            >
                <Bot className="w-6 h-6" />

                {/* Pulsing indicator */}
                <span className="absolute top-0 right-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] glass-card rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                    <Bot className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white flex items-center gap-2">
                                        Manish's AI <Sparkles className="w-3 h-3 text-blue-400" />
                                    </h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <span className="text-xs text-zinc-400">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                        } items-end gap-2`}
                                >
                                    {msg.sender === "ai" && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-500/20 mb-1">
                                            <Bot className="w-4 h-4 text-blue-400" />
                                        </div>
                                    )}

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                            ? "bg-blue-600 text-white rounded-br-sm"
                                            : "bg-white/5 border border-white/10 text-zinc-200 rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </motion.div>

                                    {msg.sender === "user" && (
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center border border-white/20 mb-1">
                                            <User className="w-4 h-4 text-zinc-300" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <form
                                onSubmit={handleSendMessage}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                            <div className="text-center mt-2 flex justify-center">
                                <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold flex items-center gap-1">
                                    Powered by Local AI Engine
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
