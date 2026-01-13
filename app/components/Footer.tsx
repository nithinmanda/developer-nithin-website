import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#111a22] border-t border-[#e5e7eb] dark:border-[#233648] py-12 px-4 md:px-40">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                        <div className="size-6 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">code_blocks</span>
                        </div>
                        <h2 className="text-lg font-bold">developer.nithin</h2>
                    </div>
                    <p className="text-[#637588] dark:text-[#92adc9] text-sm max-w-xs">
                        Building the future of digital experiences with clean code and
                        pixel-perfect design.
                    </p>
                </div>
                <div className="flex gap-8 md:gap-16 flex-wrap">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[#111418] dark:text-white font-bold text-sm uppercase tracking-wider">
                            Company
                        </h4>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            Careers
                        </a>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            Blog
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[#111418] dark:text-white font-bold text-sm uppercase tracking-wider">
                            Services
                        </h4>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            Web Development
                        </a>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            App Development
                        </a>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            UI/UX Design
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[#111418] dark:text-white font-bold text-sm uppercase tracking-wider">
                            Connect
                        </h4>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            Twitter
                        </a>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            LinkedIn
                        </a>
                        <a
                            className="text-[#637588] dark:text-[#92adc9] text-sm hover:text-primary transition-colors"
                            href="#"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-[960px] mx-auto mt-12 pt-8 border-t border-[#e5e7eb] dark:border-[#233648] flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[#637588] dark:text-[#92adc9] text-xs">
                    © 2023 developer.nithin. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a
                        className="text-[#637588] dark:text-[#92adc9] text-xs hover:text-primary"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-[#637588] dark:text-[#92adc9] text-xs hover:text-primary"
                        href="#"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
