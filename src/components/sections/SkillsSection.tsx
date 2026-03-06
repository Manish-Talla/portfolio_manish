"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        title: "Languages",
        icon: <Terminal className="w-6 h-6 text-emerald-400" />,
        skills: ["Python", "Java", "JavaScript"]
    },
    {
        title: "AI & Data",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        skills: [
            "Machine Learning",
            "Retrieval Augmented Generation (RAG)",
            "LangChain & CrewAI",
            "AI Automation & Workflows"
        ]
    },
    {
        title: "Tools & Tech",
        icon: <Wrench className="w-6 h-6 text-purple-400" />,
        skills: [
            "API Development",
            "Docker & Kubernetes",
            "PostgreSQL & Redis",
            "Flutter",
            "AWS"
        ]
    }
];

export default function SkillsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 12 }
        }
    };

    return (
        <section id="skills" className="py-24 relative z-10 w-full">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center sm:items-start"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 flex items-center gap-4">
                        <span className="text-blue-500">{"//"}</span> Technical Arsenal
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ margin: "-50px" }}
                                className="flex flex-wrap gap-3"
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
