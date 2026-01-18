'use client';

import React from 'react';
import LogoLoop from '../../components/LogoLoop';

const techLogos = [
    { src: "https://cdn.simpleicons.org/react/white", alt: "React" },
    { src: "https://cdn.simpleicons.org/nextdotjs/white", alt: "Next.js" },
    { src: "https://cdn.simpleicons.org/nodedotjs/white", alt: "Node.js" },
    { src: "https://cdn.simpleicons.org/mongodb/white", alt: "MongoDB" },
    { src: "https://cdn.simpleicons.org/swift/white", alt: "Swift" },
    { src: "https://cdn.simpleicons.org/react/white", alt: "React Native" },
    { src: "https://cdn.simpleicons.org/docker/white", alt: "Docker" },
    { src: "https://cdn.simpleicons.org/kubernetes/white", alt: "Kubernetes" },
    { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub" },
    { src: "https://cdn.simpleicons.org/javascript/white", alt: "JavaScript" },
];

export default function EngineeringServices() {
    return (
        <section id="services" className="flex flex-col items-center py-20 px-4 w-full min-h-screen justify-center relative z-10 bg-black">
            <div className="max-w-[1200px] w-full">
                <style jsx>{`
                    .scanline-container:hover .scanline {
                        opacity: 0.2;
                    }
                    .scanline {
                        background: linear-gradient(to bottom, transparent, #135bec, transparent);
                        height: 2px;
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        pointer-events: none;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    .glow-hover:hover {
                        border-color: #135bec;
                        box-shadow: 0 0 20px rgba(19, 91, 236, 0.15);
                    }
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                    }
                `}</style>
                <div className="flex items-baseline gap-4 mb-2 border-l-2 border-[#135bec] pl-6">
                    <h2 className="text-white text-3xl font-black leading-tight tracking-tighter uppercase">Engineering Services</h2>
                    <span className="text-[#135bec] text-base font-mono">[ 05 ]</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                    {/* Item 1 */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/10 p-6 glow-hover transition-all duration-500 scanline-container">
                        <div className="scanline"></div>
                        <span className="absolute right-[-20px] top-[-20px] text-[120px] font-black text-white/[0.03] select-none pointer-events-none">01</span>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="mb-8">
                                <div className="w-14 h-14 flex items-center justify-center bg-[#135bec]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-[#135bec] text-2xl">terminal</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Custom Web Development</h3>
                                <p className="text-white/50 text-sm max-w-md leading-relaxed">High-performance, scalable web architectures. We build robust technical foundations using enterprise-grade frameworks and low-latency protocols.</p>
                            </div>

                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/10 p-6 glow-hover transition-all duration-500 scanline-container">
                        <div className="scanline"></div>
                        <span className="absolute right-[-10px] top-[-10px] text-[80px] font-black text-white/[0.03] select-none pointer-events-none">02</span>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#135bec]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-[#135bec] text-xl">smartphone</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Mobile Creation</h3>
                            <p className="text-white/50 text-xs leading-relaxed mb-4">Native iOS & Android ecosystems developed with wireframe precision and seamless API integration.</p>
                            <div className="mt-auto flex items-center gap-2 text-[#135bec]/70 font-mono text-[10px]">
                                <span className="material-symbols-outlined text-[10px]">developer_mode</span>
                                <span>ARM64_OPTIMIZED</span>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/10 p-6 glow-hover transition-all duration-500 scanline-container">
                        <div className="scanline"></div>
                        <span className="absolute right-[-10px] top-[-10px] text-[80px] font-black text-white/[0.03] select-none pointer-events-none">03</span>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#135bec]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-[#135bec] text-xl">shopping_bag</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">E-commerce</h3>
                            <p className="text-white/50 text-xs leading-relaxed mb-4">Conversion-focused shopping experiences with encrypted payment layers and real-time inventory syncing.</p>
                            <div className="mt-auto flex items-center gap-2 text-[#135bec]/70 font-mono text-[10px]">
                                <span className="material-symbols-outlined text-[10px]">credit_card</span>
                                <span>SECURE_PAY_V2</span>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/10 p-6 glow-hover transition-all duration-500 scanline-container">
                        <div className="scanline"></div>
                        <span className="absolute right-[-10px] top-[-10px] text-[80px] font-black text-white/[0.03] select-none pointer-events-none">04</span>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#135bec]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-[#135bec] text-xl">polyline</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">UI/UX Design</h3>
                            <p className="text-white/50 text-xs leading-relaxed mb-4">Vector-perfect interfaces focused on cognitive load reduction and node-based interaction flows.</p>
                            <div className="mt-auto flex items-center gap-2 text-[#135bec]/70 font-mono text-[10px]">
                                <span className="material-symbols-outlined text-[10px]">architecture</span>
                                <span>NODE_SYMMETRY</span>
                            </div>
                        </div>
                    </div>
                    {/* Item 5 */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/10 p-6 glow-hover transition-all duration-500 scanline-container">
                        <div className="scanline"></div>
                        <span className="absolute right-[-10px] top-[-10px] text-[80px] font-black text-white/[0.03] select-none pointer-events-none">05</span>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-[#135bec]/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-[#135bec] text-xl">dns</span>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 bg-[#135bec]/20 rounded-full border border-[#135bec]/30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#135bec] shadow-[0_0_8px_#135bec]"></div>
                                    <span className="text-[8px] font-bold text-[#135bec] tracking-widest uppercase">Live</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">24/7 Maintenance</h3>
                            <p className="text-white/50 text-xs leading-relaxed mb-4">Proactive server monitoring, automated security patching, and zero-downtime deployment pipelines.</p>
                            <div className="mt-auto flex items-center gap-2 text-[#135bec]/70 font-mono text-[10px]">
                                <span className="material-symbols-outlined text-[10px]">monitor_heart</span>
                                <span>UPTIME_99.99%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 overflow-hidden w-full opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <div className="relative w-full max-w-full">
                        <LogoLoop
                            logos={techLogos}
                            speed={50}
                            direction="left"
                            logoHeight={24}
                            gap={40}
                            pauseOnHover={true}
                            fadeOut={true}
                            fadeOutColor="#000000"
                        />
                    </div>
                </div>



            </div>
        </section>
    );
}
