"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Rocket } from "lucide-react";

export default function AboutSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 items-center gap-4 flex flex-col md:flex-row">
                        <span className="text-blue-500">{"//"}</span> About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-100px" }}
                    >
                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                            I am an <strong className="text-white font-semibold">Artificial Intelligence and Data Science graduate</strong> and software developer, deeply passionate about building intelligent AI applications and modern digital products.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-lg text-zinc-400 leading-relaxed mb-8">
                            My focus lies at the intersection of innovative AI models, scalability, and exceptional user experience. I strive to create systems that are not just technically advanced, but also beautifully designed and user-centric.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-zinc-300">Open to Work</span>
                            </div>
                            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10">
                                <span className="text-sm font-medium text-zinc-300">Based in India</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-100px" }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {[
                            {
                                icon: <Brain className="w-6 h-6 text-blue-400" />,
                                title: "AI Development",
                                description: "Building intelligent agents, RAG systems, and integrating LLMs into robust applications."
                            },
                            {
                                icon: <Code2 className="w-6 h-6 text-emerald-400" />,
                                title: "Software Engineering",
                                description: "Developing scalable, high-performance backends and interactive, modern frontend experiences."
                            },
                            {
                                icon: <Rocket className="w-6 h-6 text-purple-400" />,
                                title: "Product Innovation",
                                description: "Transforming complex requirements into intuitive, market-ready digital products."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
