import NoiseButton from "./shared/NoiseButton";

export default function Opening() {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Background Gradient Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Navigation */}


            {/* Hero Section */}
            <main className="flex-grow flex items-center ">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-8 z-10 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                    Available for new projects
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                                We Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                                    Stunning Websites
                                </span>{" "}
                                & Powerful Apps
                            </h1>
                            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                                Full-cycle web and mobile app development for ambitious brands. We
                                build high-performance digital products that scale.
                            </p>
                            <a href="#contact">
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <NoiseButton text="Start a Project" />

                                </div>

                            </a>

                            {/* Social Proof
                            <div className="pt-8 border-t border-white/5 mt-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
                                    Trusted by industry leaders
                                </p>
                                <div className="flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                                    Logo 1
                                    <div className="h-8 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-2xl">
                                            verified_user
                                        </span>
                                        <span className="font-bold text-lg">SecureTech</span>
                                    </div>
                                    Logo 2
                                    <div className="h-8 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-2xl">
                                            bolt
                                        </span>
                                        <span className="font-bold text-lg">FlashDev</span>
                                    </div>
                                    Logo 3
                                    <div className="h-8 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-2xl">
                                            cloud_circle
                                        </span>
                                        <span className="font-bold text-lg">Nimbus</span>
                                    </div>
                                    Logo 4
                                    <div className="h-8 flex items-center gap-2 hidden sm:flex">
                                        <span className="material-symbols-outlined text-2xl">
                                            hub
                                        </span>
                                        <span className="font-bold text-lg">Connect</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* Right Visuals (Abstract Composition) */}
                        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center perspective-[2000px] group">
                            {/* Back Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>

                            {/* Card 1: Code Editor (Furthest Back) */}
                            <div className="absolute w-[340px] h-[280px] lg:w-[480px] lg:h-[320px] glass-card rounded-xl p-4 transform -rotate-6 translate-x-12 -translate-y-12 lg:translate-x-20 lg:-translate-y-20 shadow-2xl transition-transform duration-700 group-hover:-translate-y-24 group-hover:-rotate-3 z-0">
                                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    <div className="ml-auto text-xs text-slate-500 font-mono">
                                        App.tsx
                                    </div>
                                </div>
                                <div className="font-mono text-xs lg:text-sm text-slate-300 space-y-1 overflow-hidden">
                                    <div className="flex">
                                        <span className="text-purple-400 mr-2">const</span>{" "}
                                        <span className="text-yellow-300">Hero</span> = () =&gt;{"{"}
                                    </div>
                                    <div className="flex pl-4">
                                        <span className="text-purple-400 mr-2">return</span> (
                                    </div>
                                    <div className="flex pl-8 text-green-300">
                                        &lt;div className="future"&gt;
                                    </div>
                                    <div className="flex pl-12 text-white">
                                        &lt;h1&gt;Building Next Gen&lt;/h1&gt;
                                    </div>
                                    <div className="flex pl-12 text-green-300">
                                        &lt;InteractiveUI /&gt;
                                    </div>
                                    <div className="flex pl-8 text-green-300">&lt;/div&gt;</div>
                                    <div className="flex pl-4">);</div>
                                    <div>{"}"}</div>
                                </div>
                            </div>

                            {/* Card 2: Analytics Dashboard (Middle) */}
                            <div className="absolute w-[300px] h-[240px] lg:w-[400px] lg:h-[300px] glass-card bg-slate-850/90 rounded-xl p-5 transform rotate-3 translate-x-[-20px] -translate-y-[-10px] shadow-2xl z-10 animate-float-delayed border border-white/10">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-xs text-slate-400">Total Users</div>
                                        <div className="text-2xl font-bold text-white">124,592</div>
                                    </div>
                                    <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                                        +12.5%
                                    </div>
                                </div>
                                {/* Mock Chart */}
                                <div className="flex items-end justify-between h-24 lg:h-32 gap-2 mb-4">
                                    <div className="w-full bg-primary/20 rounded-t h-[40%] hover:bg-primary/40 transition-colors"></div>
                                    <div className="w-full bg-primary/20 rounded-t h-[65%] hover:bg-primary/40 transition-colors"></div>
                                    <div className="w-full bg-primary/20 rounded-t h-[50%] hover:bg-primary/40 transition-colors"></div>
                                    <div className="w-full bg-primary/20 rounded-t h-[85%] hover:bg-primary/40 transition-colors relative group/bar">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                            Peak Traffic
                                        </div>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-t h-[60%] hover:bg-primary/40 transition-colors"></div>
                                    <div className="w-full bg-primary rounded-t h-[95%] shadow-[0_0_15px_rgba(19,127,236,0.5)]"></div>
                                    <div className="w-full bg-primary/20 rounded-t h-[75%] hover:bg-primary/40 transition-colors"></div>
                                </div>
                            </div>

                            {/* Card 3: Mobile App Interface (Front) */}
                            <div className="absolute w-[180px] h-[320px] lg:w-[220px] lg:h-[400px] bg-background-dark border-[4px] border-slate-700 rounded-[2rem] shadow-2xl transform -rotate-6 translate-x-[-120px] lg:translate-x-[-160px] translate-y-10 lg:translate-y-16 z-20 animate-float overflow-hidden">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-700 rounded-b-xl z-30"></div>
                                {/* App Content */}
                                <div className="h-full w-full bg-gradient-to-b from-slate-800 to-slate-900 p-4 pt-10 flex flex-col gap-3">
                                    <div className="flex justify-between items-center text-white mb-2">
                                        <span className="material-symbols-outlined text-sm">
                                            menu
                                        </span>
                                        <div
                                            className="w-6 h-6 rounded-full bg-primary bg-cover"
                                            data-alt="User avatar placeholder"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbTfgf4s3fmJvDS_iW-Q8aLTdQbonu8VvW5lrK6trQyRVJ8DaQnlhXwPSHnrnqnrJbRKM29vuzyFsp-F2byZiMm_BM5N4_n27ldDuyOVYBB4CweVmIyuOSVyD9z0dAj-wO8yE-GESNqO51KmTXVmFT03FQ9VK7YllVMKK-qcxR71RvtWm_J0bdDy99HSM2rnuqLUNo1j96khcyv7qddL_e6BXlO-hlHqFnax-fwR8j_zTYwkpFJu_fQudmbwVm8lHoWT1cn7UPdyCm')",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-white text-lg font-bold leading-tight">
                                        Hello, <br />
                                        <span className="text-primary">Creator</span>
                                    </div>
                                    {/* Card Widget */}
                                    <div className="bg-slate-700/50 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                        <div className="flex justify-between mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                                                <span className="material-symbols-outlined text-base">
                                                    pie_chart
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-slate-600 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-orange-400"></div>
                                        </div>
                                    </div>
                                    {/* List Items */}
                                    <div className="flex flex-col gap-2 mt-auto">
                                        <div className="h-12 w-full bg-slate-800 rounded-lg border border-white/5 flex items-center px-3 gap-3">
                                            <div className="w-8 h-8 rounded bg-blue-500/20"></div>
                                            <div className="w-16 h-2 bg-slate-600 rounded"></div>
                                        </div>
                                        <div className="h-12 w-full bg-slate-800 rounded-lg border border-white/5 flex items-center px-3 gap-3">
                                            <div className="w-8 h-8 rounded bg-purple-500/20"></div>
                                            <div className="w-12 h-2 bg-slate-600 rounded"></div>
                                        </div>
                                        <button className="w-full py-2 bg-primary rounded-lg text-white text-xs font-bold mt-2 shadow-[0_4px_10px_rgba(19,127,236,0.3)]">
                                            Deploy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -right-4 top-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 blur-xl opacity-40 animate-pulse"></div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};