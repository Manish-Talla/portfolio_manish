"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-40 transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-6xl">
                <nav
                    className={cn(
                        "flex items-center justify-between rounded-full transition-all duration-300 px-6 py-3",
                        isScrolled
                            ? "glass shadow-lg border-white/10"
                            : "bg-transparent border-transparent"
                    )}
                >
                    <Link href="/" className="text-xl font-bold tracking-tighter mix-blend-difference">
                        MT<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, "#contact")}
                            className="px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-200"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-6 p-6 rounded-2xl glass border border-white/10 shadow-2xl flex flex-col space-y-4 md:hidden"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors py-2 border-b border-white/5"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, "#contact")}
                            className="mt-4 px-6 py-3 rounded-full bg-white text-black text-center font-medium hover:bg-zinc-200 transition-colors"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
