"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "@/hooks/useToast";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the mailto link
        const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:manishtalla.tems@gmail.com?subject=${subject}&body=${body}`;

        // Open the user's email client
        window.location.href = mailtoLink;

        toast.show("Opening your email client... Message ready to send!", "success");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center sm:items-start"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 flex items-center gap-4">
                        <span className="text-blue-500">{"//"}</span> Let's Connect
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                    <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col gap-8 mb-12 lg:mb-0">
                            <a
                                href="mailto:manishtalla.tems@gmail.com"
                                className="group flex flex-col p-6 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-blue-500/50"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Email Me</h3>
                                <p className="text-zinc-400 transition-colors group-hover:text-zinc-300">manishtalla.tems@gmail.com</p>
                            </a>

                            <div className="grid grid-cols-2 gap-6">
                                <a
                                    href="https://github.com/Manish-Talla"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col p-6 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-zinc-500/50"
                                >
                                    <div className="w-12 h-12 rounded-full bg-zinc-500/10 flex items-center justify-center mb-4 text-zinc-400 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                                    <p className="text-sm text-zinc-500">View Repos</p>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/tallamanish"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col p-6 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-blue-600/50"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                                    <p className="text-sm text-zinc-500">Connect</p>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-8 rounded-3xl glass-card border border-white/10"
                        >
                            <motion.h3
                                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                className="text-2xl font-bold font-heading mb-4"
                            >
                                Send a Message
                            </motion.h3>

                            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm text-zinc-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-zinc-600 transition-all"
                                    placeholder="John Doe"
                                />
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm text-zinc-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-zinc-600 transition-all"
                                    placeholder="john@example.com"
                                />
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm text-zinc-400 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-zinc-600 transition-all resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </motion.div>

                            <motion.button
                                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                type="submit"
                                className="mt-2 group flex items-center justify-center gap-2 w-full py-4 text-white font-medium bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
