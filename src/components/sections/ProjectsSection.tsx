"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { toast } from "@/hooks/useToast";

const PROJECTS = [
    {
        title: "RAG AI Assistant",
        description: "An AI system using Retrieval-Augmented Generation that reads notebooks, summarizes documents, and answers questions intelligently.",
        tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
        color: "from-blue-500/20 to-transparent",
        borderHover: "hover:border-blue-500/50"
    },
    {
        title: "Viralyst",
        description: "A social media trend analysis platform that predicts viral content using AI dashboards and scrapped insights.",
        tech: ["Flutter", "Python", "FastAPI", "PyTorch", "AWS", "Docker"],
        color: "from-purple-500/20 to-transparent",
        borderHover: "hover:border-purple-500/50"
    },
    {
        title: "NeuroForge",
        description: "An AI automation engine for building intelligent workflows using LangChain, CrewAI, and real-time inference.",
        tech: ["Flutter", "Python", "FastAPI", "LangChain", "CrewAI", "Pinecone"],
        color: "from-emerald-500/20 to-transparent",
        borderHover: "hover:border-emerald-500/50"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                    <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
                        A selection of my best work in AI, software development, and digital innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`group relative rounded-3xl glass-card border-white/5 ${project.borderHover} transition-all duration-500 overflow-hidden flex flex-col h-full`}
                        >
                            {/* Top Gradient Glow */}
                            <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="p-8 pb-0 relative z-10 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        <span className="font-heading font-bold text-xl">{project.title.charAt(0)}</span>
                                    </div>
                                    <div className="flex gap-2 text-zinc-400">
                                        <button onClick={() => toast.show("Project repository is being polished. Stay tuned!", "info")} className="hover:text-white transition-colors cursor-pointer"><Github className="w-5 h-5" /></button>
                                        <button onClick={() => toast.show("The future is loading... Deployment in progress!", "info")} className="hover:text-white transition-colors cursor-pointer"><ArrowUpRight className="w-5 h-5" /></button>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                            </div>

                            <div className="p-8 pt-0 relative z-10 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => toast.show(`Building something amazing... ${project.title} will be live soon!`, "success")}
                                    className="inline-flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                                >
                                    View Project <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
