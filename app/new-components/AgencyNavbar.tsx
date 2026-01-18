'use client';

import { useState } from 'react';
import ShinyText from '@/components/ShinyText';

export default function AgencyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 px-6 py-4">
            <nav className="max-w-[1800px] mx-auto flex items-center justify-between">
                <div className="flex items-center relative z-50">
                    <ShinyText text="developer.nithin" />
                </div>
                <div className="flex items-center gap-12">
                    {/* Desktop Menu */}
                    {/* <div className="hidden md:flex items-center gap-10">
                        <a className="text-xs uppercase tracking-widest font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">
                            Work
                        </a>
                        <a className="text-xs uppercase tracking-widest font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">
                            Services
                        </a>
                        <a className="text-xs uppercase tracking-widest font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">
                            Store
                        </a>
                    </div> */}

                    <div className="flex items-center gap-4">
                        <a
                            className="px-6 py-2.5 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/5 backdrop-blur-md contact-button-glow transition-all relative z-50 hover:bg-white/10"
                            href="/contact-real"
                            rel="noopener noreferrer"
                        >
                            Contact
                        </a>

                        {/* Mobile Menu Button */}
                        {/* <button
                            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button> */}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {/* <div className={`fixed inset-0 bg-background-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <a
                    className="text-2xl uppercase tracking-widest font-bold hover:text-primary transition-colors"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Work
                </a>
                <a
                    className="text-2xl uppercase tracking-widest font-bold hover:text-primary transition-colors"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Services
                </a>
                <a
                    className="text-2xl uppercase tracking-widest font-bold hover:text-primary transition-colors"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Store
                </a>
            </div> */}
        </header>
    );
}
