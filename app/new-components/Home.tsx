'use client';

import PortfolioCTA from './Contact';
import PortfolioHero from './Opening';
import DevelopmentProcess from './DevelopmentProcess';
import FounderProfile from './FounderProfile';
import AgencyNavbar from './AgencyNavbar';
import { useEffect, useRef } from 'react';
import Footer from './Footer';
import EngineeringServices from './EngineeringServices';

export default function Home() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
            {/* Side Progress Indicator */}
            <AgencyNavbar />
            <PortfolioHero />
            <EngineeringServices />
            <DevelopmentProcess />
            <FounderProfile />
            <PortfolioCTA />
            <Footer />

            {/* Custom Cursor Follower (Visual Only) */}
            <div
                ref={cursorRef}
                className="fixed pointer-events-none z-[100] top-0 left-0 hidden lg:block"
            >
                <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center transition-transform duration-200">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
