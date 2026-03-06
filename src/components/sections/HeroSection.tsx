"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }, // Smooth spring-like ease Out Expo
        },
    };

    return (
        <section className="relative min-h-screen flex text-center items-center justify-center pt-20 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
                className="container mx-auto px-6 relative z-10 flex flex-col items-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium tracking-wide text-zinc-300">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-4xl mx-auto leading-tight mb-6"
                >
                    <span className="font-heading">AI Developer &</span>
                    <br />
                    <span className="text-gradient font-heading">Software Engineer</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Building intelligent systems, AI products, and digital experiences that define the future.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 w-full sm:w-auto"
                    >
                        Show Projects
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 w-full sm:w-auto"
                    >
                        <Mail className="w-5 h-5 mr-2 text-zinc-400" />
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}
