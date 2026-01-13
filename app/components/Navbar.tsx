"use client";

import React, { useState, useEffect } from "react";
import NoiseButton from "./shared/NoiseButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                ? "border-white/5 bg-background-dark/80 backdrop-blur-md h-12"
                : "border-transparent bg-transparent h-16"
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="size-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[20px]">
                                code_blocks
                            </span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            developer<span className="text-primary">.nithin</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            href="#services"
                        >
                            Services
                        </a>
                        <a
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            href="#process"
                        >
                            Process
                        </a>
                    </div>

                    {/* CTA */}
                    <a href="#contact">
                        <div className="hidden md:flex items-center gap-4">
                            <NoiseButton text="Let's Talk" size="sm" />
                        </div>
                    </a>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-white p-2">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
