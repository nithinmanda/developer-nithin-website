import React from 'react';

export default function DevelopmentProcess() {
    return (
        <section className="pt-12 pb-8 w-full font-display">
            {/* Hero Header */}
            <div className="max-w-4xl mx-auto text-center px-6 mb-8">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Engineered for Excellence</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Our Methodology</h1>
            </div>
            {/* Timeline Section */}
            <div className="relative max-w-6xl mx-auto px-6">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden md:block bg-[linear-gradient(180deg,rgba(19,91,236,0)_0%,#135bec_20%,#135bec_80%,rgba(19,91,236,0)_100%)]"></div>
                <div className="space-y-16">
                    {/* Step 01 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-[45%] order-2 md:order-1">
                            <div className="bg-white/3 backdrop-blur-[10px] border border-white/5 p-10 rounded-2xl relative overflow-hidden group">
                                <span className="absolute -right-4 -top-8 text-9xl font-bold text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">01</span>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">search</span>
                                    <h3 className="text-2xl font-bold">Discovery</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-base">
                                    Deep immersion into your business goals, user behaviors, and market positioning. We conduct exhaustive research to identify unique opportunities for disruption.
                                </p>
                                <ul className="mt-6 space-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> User Persona Mapping</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Competitive Analysis</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Technical Feasibility Audit</li>
                                </ul>
                            </div>
                        </div>
                        <div className="z-10 absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                            <div className="size-4 bg-primary rounded-full shadow-[0_0_20px_2px_rgba(19,91,236,0.4)]"></div>
                        </div>
                        <div className="w-full md:w-[45%] mb-8 md:mb-0 order-1 md:order-2 flex justify-center">
                            <div className="size-64 rounded-full bg-gradient-to-tr from-primary/20 to-transparent flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="w-48 h-48 object-contain" alt="Abstract 3D sphere representing data exploration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc6ZV-7XqYHItTpBhOgXBhz1xeJMK-EKQY2cf6iMYkfgak4W9bBeQk0FmuZI6mHePQCebqYqx5j0ZnJXtuWQ-ps3WMJ21bC3uSNoMtL_VdGWVMTG1T_7mLIANXYEjEODNvMcKMNH6Y_UWOtn4_yb0UdGAP7ZhW48olQPD69fJBh7j1TBVEDK_J2bbkjf4JBaN9XS6ztMHFwB6tM7QzyVabmcss0zJkB2Kzq-R44W5Xfy05BckXIwsP4abLvx9szgF93EYLYuPHQrU" />
                            </div>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-[45%] mb-8 md:mb-0 flex justify-center">
                            <div className="size-64 rounded-full bg-gradient-to-tl from-primary/20 to-transparent flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="w-48 h-48 object-contain" alt="Technical blueprint 3D wireframe object" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA67Xn0Ka4CHXztOEwue7NkK24Kh4p5ZZG5uFNGcHffLsYpfj8UWAFteDSbd3vvV6bvpAHf-UNnvWb3tGPk7BxOC7woc08DTKDxJUskY7XAqSrqjRd76nqkkbDBYLfx2sLrP-TcxXr3hrSgAX25sueP93ApNv-bsbYbeP3bYEA9elBx5SMqXB5JgEEtkrGNNBqHUY6wadSiQ25MksKxvkhyMmRKgyhtbJsud55TQVTG4B1ovKfy8z5n6QWa0NaBvTzpxq__fY-WKDo" />
                            </div>
                        </div>
                        <div className="z-10 absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                            <div className="size-4 bg-primary rounded-full shadow-[0_0_20px_2px_rgba(19,91,236,0.4)]"></div>
                        </div>
                        <div className="w-full md:w-[45%]">
                            <div className="bg-white/3 backdrop-blur-[10px] border border-white/5 p-10 rounded-2xl relative overflow-hidden group">
                                <span className="absolute -left-4 -top-8 text-9xl font-bold text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">02</span>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                                    <h3 className="text-2xl font-bold">Architecture</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-base">
                                    Designing the digital skeleton of your product. We prioritize scalability, security, and performance using industry-leading tech stacks and modular patterns.
                                </p>
                                <ul className="mt-6 space-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Information Architecture</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Low-fidelity Wireframing</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Cloud Infrastructure Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-[45%] order-2 md:order-1">
                            <div className="bg-white/3 backdrop-blur-[10px] border border-white/5 p-10 rounded-2xl relative overflow-hidden group">
                                <span className="absolute -right-4 -top-8 text-9xl font-bold text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">03</span>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">code</span>
                                    <h3 className="text-2xl font-bold">Development</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-base">
                                    High-velocity engineering with clean, documented code. We work in agile sprints to provide regular updates and maintain full transparency throughout the build.
                                </p>
                                <ul className="mt-6 space-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> React & Next.js Implementation</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> API Integration & Logic</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> CI/CD Pipeline Automation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="z-10 absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                            <div className="size-4 bg-primary rounded-full shadow-[0_0_20px_2px_rgba(19,91,236,0.4)]"></div>
                        </div>
                        <div className="w-full md:w-[45%] mb-8 md:mb-0 order-1 md:order-2 flex justify-center">
                            <div className="size-64 rounded-full bg-gradient-to-tr from-primary/20 to-transparent flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="w-48 h-48 object-contain" alt="Stylized coding blocks or crystalline structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo1bYOWs-R3GA_dejVbcJfwJH81Hu_dt2NEVx6hhx4hH7V34I2bmxCUbO_TmSpuLxIFOtwLfFRPgfTLwpl8eAlBEIEHT7aAY5OReqZLVoFwoUWc3I2SzO1K7Abpkhuv5E8pjObvThSpAb_iZKV_C9pu0STcnXT5OuxJFdoA3m-3SItl9npThwcUetYmJe93GyLdBRaHCnB9HpyENfmMx-Ajoo3UlZSKHmLflruufC5WIeIdCz9QLk8kuaN4wq2lbVyi2fmyRVQn3I" />
                            </div>
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-[45%] mb-8 md:mb-0 flex justify-center">
                            <div className="size-64 rounded-full bg-gradient-to-tl from-primary/20 to-transparent flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="w-48 h-48 object-contain" alt="Shield or diamond representing high quality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk0uKJ4ibHzHY-26vfuDowo1zZOFBfysiP_IaPjZDo7OxSQz56EwCbdEQASU8hMznfHndcylKaHz52AX3w0pgK569mzBvu4HS9Nxw6i-fDY4WFjw6zw0N4_Zsramgj0U3MNLiL1lcVjQsMJrf0F7gaDGD8Wihj_jFD3Q_U2-0K4amWv85Opl-yF7Qs9Mz3ZnOI5RBZu_fl4YUkUsTrlhVZUgyuiEabWR6R6ReAuCIHGy9DfMhbutL9XGgAXnGODyN-e6ddpb5CB8o" />
                            </div>
                        </div>
                        <div className="z-10 absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                            <div className="size-4 bg-primary rounded-full shadow-[0_0_20px_2px_rgba(19,91,236,0.4)]"></div>
                        </div>
                        <div className="w-full md:w-[45%]">
                            <div className="bg-white/3 backdrop-blur-[10px] border border-white/5 p-10 rounded-2xl relative overflow-hidden group">
                                <span className="absolute -left-4 -top-8 text-9xl font-bold text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">04</span>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                                    <h3 className="text-2xl font-bold">Deployment & QA</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-base">
                                    Rigorous automated and manual testing to ensure a flawless launch. We perform performance audits and security hardening before handover.
                                </p>
                                <ul className="mt-6 space-y-2 text-sm text-slate-500 font-medium">
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Unit & Integration Testing</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Pentesting & Security Hardening</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Zero-downtime Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
