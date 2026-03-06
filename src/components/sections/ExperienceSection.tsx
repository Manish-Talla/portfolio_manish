"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
    {
        role: "Software Developer Intern",
        company: "Keyspark",
        duration: "Present",
        description: "Developed and maintained HelloPlay, a mobile application for sports arena booking and networking. Integrated real-time slot availability, instant court booking, and social features enabling users to join matches, share highlights, and build a sports community."
    },
    {
        role: "Business Analyst Intern",
        company: "TEMS Tech Solutions",
        duration: "Internship",
        description: "Worked closely with technical and business teams to evaluate product-market fit, streamline development processes, and identify growth opportunities for technological solutions within the company."
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative z-10 w-full bg-black/40">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center sm:items-end text-center sm:text-right"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full ml-auto" />
                </motion.div>

                <div className="max-w-3xl mx-auto flex flex-col gap-8">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                            className="group relative"
                        >
                            {/* Ambient Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.15 }
                                    }
                                }}
                                className="relative glass-card rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                                    {/* Icon Container */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
                                        }}
                                        className="flex-shrink-0"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <Briefcase className="w-8 h-8 text-blue-400 relative z-10" />
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                            }}
                                            className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2"
                                        >
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                <p className="text-lg text-blue-400 font-medium tracking-wide">{exp.company}</p>
                                            </div>
                                            {/* Badge */}
                                            <div className="inline-flex max-w-fit items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-zinc-300 self-start md:self-auto">
                                                {exp.duration}
                                            </div>
                                        </motion.div>

                                        <motion.p
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                            }}
                                            className="text-zinc-400 leading-relaxed max-w-2xl text-lg"
                                        >
                                            {exp.description}
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
